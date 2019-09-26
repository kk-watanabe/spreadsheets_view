import Vue from "vue";
import Vuex, { ActionContext, ActionTree } from "vuex";
import { api, ApiState } from "@/store/modules/api";
import { category, CategoryState } from "@/store/modules/category";
import { auth, AuthState } from "@/store/modules/auth";

Vue.use(Vuex);

export interface RootState {
  api: ApiState;
  auth: AuthState;
  category: CategoryState;
}

const actions = <ActionTree<RootState, RootState>>{};

export default new Vuex.Store<RootState>({
  actions: actions,
  modules: {
    api,
    auth,
    category
  }
});
