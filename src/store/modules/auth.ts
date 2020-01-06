import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "@/store";
import { LoginInfo } from "@/models/Login";

export class AuthState {
  spreadSheetsId: string = "";
  spreadSheetsName: string = "";
  disabledLogin: boolean = false;
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
    } catch (e) {
      commit("setDisabledLogin", e);
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
