import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "@/store";
import { LoginInfo } from "@/models/Login";

const MAX_LOGIN_INFO_LENGTH: number = 5;

export class AuthState {
  spreadSheetsId: string = "";
  spreadSheetsName: string = "";
  disabledLogin: boolean = false;
  saveLoginInfos: LoginInfo[] = [];
}

const mutations = <MutationTree<AuthState>>{
  setSpreadSheetsId(state: AuthState, id: string) {
    state.spreadSheetsId = id;
  },
  setSpreadSheetsName(state: AuthState, name: string) {
    state.spreadSheetsName = name;
  },
  setDisabledLogin(state: AuthState, disabledLogin: boolean) {
    state.disabledLogin = disabledLogin;
  },
  setSaveLoginInfos(state: AuthState, saveLoginInfos: LoginInfo[]) {
    state.saveLoginInfos = saveLoginInfos;
  }
};

const getters = <GetterTree<AuthState, RootState>>{
  loggedIn(state: AuthState): boolean {
    if (state.spreadSheetsId.length > 0) {
      return true;
    }

    return false;
  }
};

const actions = <ActionTree<AuthState, RootState>>{
  async login({ commit, dispatch, rootState }, info: LoginInfo) {
    try {
      const spreadSheets = await rootState.api.category.getCategory(info.id);

      if (!spreadSheets.results) {
        throw true;
      }

      commit("setSpreadSheetsId", info.id);
      commit("setDisabledLogin", false);
      commit("setSpreadSheetsName", info.name);
      dispatch("category/fetchCategoryClassInfo", info.id, { root: true });

      // Save until tab is closed
      sessionStorage.setItem("spreadSheetsId", info.id);
      sessionStorage.setItem("spreadSheetsName", info.name);

      dispatch("addLoginInfo", info);
    } catch (e) {
      commit("setDisabledLogin", e);
    }
  },
  logout({ commit }) {
    commit("setSpreadSheetsId", "");
    commit("setSpreadSheetsName", "");

    sessionStorage.removeItem("spreadSheetsId");
    sessionStorage.removeItem("spreadSheetsName");
  },
  addLoginInfo({ rootState, commit }, info: LoginInfo) {
    const loginInfos: LoginInfo[] = rootState.auth.saveLoginInfos;

    if (!loginInfos.find(loginInfo => loginInfo.id === info.id)) {
      // Remove leading if maximum
      if (loginInfos.length === MAX_LOGIN_INFO_LENGTH) {
        loginInfos.shift();
      }

      loginInfos.push({
        id: info.id,
        name: info.name
      });

      commit("setSaveLoginInfos", loginInfos);
      localStorage.setItem("loginInfos", JSON.stringify(loginInfos));
    }
  },
  fetchLoginInfos({ commit }) {
    if (sessionStorage.spreadSheetsId) {
      commit("setSpreadSheetsId", sessionStorage.spreadSheetsId);
      commit("setSpreadSheetsName", sessionStorage.spreadSheetsName);
    }

    if (localStorage.loginInfos) {
      commit("setSaveLoginInfos", localStorage.loginInfos);
    }
  }
};

export const auth = {
  namespaced: true,
  state: new AuthState(),
  mutations: mutations,
  getters: getters,
  actions: actions
};
