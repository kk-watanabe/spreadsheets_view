import Vue from "vue";
import Vuex, { ActionContext, ActionTree } from "vuex";
import { api, ApiState } from "@/store/modules/api";

Vue.use(Vuex);

export interface RootState {
  api: ApiState;
}

const actions = <ActionTree<RootState, RootState>>{
  async initialize({ commit, dispatch, rootState }) {
    await Promise.all([]);
  }
};

export default new Vuex.Store<RootState>({
  actions: actions,
  modules: {
    api
  }
});
