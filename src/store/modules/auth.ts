import { MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store";

export class AuthState {
  spreadSheetsId: string = "";
}

const mutations = <MutationTree<AuthState>>{
  setSpreadSheetsId(state: AuthState, id: string) {
    state.spreadSheetsId = id;
  }
};

const actions = <ActionTree<AuthState, RootState>>{
  async login({ commit, rootState }, id: string) {
    commit("setSpreadSheetsId", id);
  }
};

export const auth = {
  namespaced: true,
  state: new AuthState(),
  mutations: mutations,
  actions: actions
};
