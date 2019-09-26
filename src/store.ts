import Vue from "vue";
import Vuex, { ActionContext, ActionTree } from "vuex";
import { api, ApiState } from "@/store/modules/api";
import { category, CategoryState } from "@/store/modules/category";

Vue.use(Vuex);

export interface RootState {
  api: ApiState;
  category: CategoryState;
}

const actions = <ActionTree<RootState, RootState>>{
  async initialize({ commit, dispatch, rootState }) {
    dispatch("category/fetchCategoryClassInfo");
  }
};

export default new Vuex.Store<RootState>({
  actions: actions,
  modules: {
    api,
    category
  }
});
