import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "@/store";
import { LoginInfo } from "@/models/Login";

const MAX_LOGIN_INFO_LENGTH: number = 5;

export class AuthState {
  loggedInInfo: LoginInfo = {
    id: "",
    name: ""
  };
  disabledLogin: boolean = false;
  saveLoginInfos: LoginInfo[] = [];
}

const mutations = <MutationTree<AuthState>>{
  setLoggedInInfo(state: AuthState, loggedInInfo: LoginInfo) {
    state.loggedInInfo = loggedInInfo;
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
    if (state.loggedInInfo.id.length > 0) {
      return true;
    }

    return false;
  }
};

const actions = <ActionTree<AuthState, RootState>>{
  async addLoginInfo({ rootState, commit }, info: LoginInfo) {
    const loginInfos = rootState.auth.saveLoginInfos;

    if (loginInfos.find(loginInfo => loginInfo.id === info.id) === undefined) {
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
  fetchLoginInfos({ commit, dispatch }) {
    if (sessionStorage.spreadSheetsId) {
      const loginInfo: LoginInfo = {
        id: sessionStorage.spreadSheetsId,
        name: sessionStorage.spreadSheetsName
      };

      commit("setLoggedInInfo", loginInfo);
      dispatch("login", loginInfo);
    }

    if (localStorage.loginInfos) {
      commit("setSaveLoginInfos", JSON.parse(localStorage.loginInfos));
    }
  },
  removeLoginInfo({ rootState, commit }, info: LoginInfo) {
    const loginInfos = rootState.auth.saveLoginInfos;

    if (loginInfos.find(loginInfo => loginInfo.id === info.id)) {
      const filetrLoginInfos = loginInfos.filter(
        loginInfo => loginInfo.id !== info.id
      );

      commit("setSaveLoginInfos", filetrLoginInfos);
      localStorage.setItem("loginInfos", JSON.stringify(filetrLoginInfos));
    }
  },
  async login({ commit, dispatch, rootState }, info: LoginInfo) {
    try {
      const spreadSheets = await rootState.api.category.getCategory(info.id);

      if (!spreadSheets.results) {
        throw true;
      }

      commit("setLoggedInInfo", { id: info.id, name: info.name });
      commit("setDisabledLogin", false);
      dispatch("category/fetchCategoryClassInfo", info.id, { root: true });
      dispatch("addLoginInfo", info);

      // Save until tab is closed
      sessionStorage.setItem("spreadSheetsId", info.id);
      sessionStorage.setItem("spreadSheetsName", info.name);
    } catch (e) {
      commit("setDisabledLogin", e);
    }
  },
  logout({ commit }) {
    commit("setLoggedInInfo", { id: "", name: "" });

    sessionStorage.removeItem("spreadSheetsId");
    sessionStorage.removeItem("spreadSheetsName");
  }
};

export const auth = {
  namespaced: true,
  state: new AuthState(),
  mutations: mutations,
  getters: getters,
  actions: actions
};
