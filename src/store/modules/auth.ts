import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "@/store";

export class AuthState {
  spreadSheetsId: string = "";
  disabledLogin: boolean = false;
}

const mutations = <MutationTree<AuthState>>{
  setSpreadSheetsId(state: AuthState, id: string) {
    state.spreadSheetsId = id;
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
  async login({ dispatch }, id: string) {
    dispatch("category/fetchCategoryClassInfo", id, { root: true });
  }
};

export const auth = {
  namespaced: true,
  state: new AuthState(),
  mutations: mutations,
  getters: getters,
  actions: actions
};
