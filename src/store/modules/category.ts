import { MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store";
import { ClassInfo } from "@/models/ClassInfo";
import { Category } from "@/models/Category";

interface CategoryClassInfos {
  [key: string]: ClassInfo[];
}

export class CategoryState {
  categories: Category[] = [];
  categoryClassInfos: CategoryClassInfos = {
    title: [],
    text: [],
    icon: [],
    button: [],
    box: [],
    list: [],
    table: [],
    column: [],
    content: [],
    other: []
  };
}

const mutations = <MutationTree<CategoryState>>{
  setCategories(state: CategoryState, category: Category[]) {
    state.categories = category;
  },
  setCategoryClassInfo(
    state: CategoryState,
    categoryClassInfos: CategoryClassInfos
  ) {
    state.categoryClassInfos = categoryClassInfos;
  }
};

const actions = <ActionTree<CategoryState, RootState>>{
  async fetchCategoryClassInfo({ commit, rootState }) {
    const body = await rootState.api.category.getCategory();
    const categoryClassInfos = rootState.category.categoryClassInfos;

    body.results.forEach(result => {
      categoryClassInfos[result.category].push(ClassInfo.fromJson(result));
    });

    const categoryClassInfoKeys: string[] = Object.keys(categoryClassInfos);
    const categories: Category[] = categoryClassInfoKeys.map(
      categoryClassInfoKey => {
        if (categoryClassInfos[categoryClassInfoKey].length) {
          return new Category(categoryClassInfoKey, true);
        }

        return new Category(categoryClassInfoKey, false);
      }
    );

    commit("setCategoryClassInfo", categoryClassInfos);
    commit("setCategories", categories);
  }
};

export const category = {
  namespaced: true,
  state: new CategoryState(),
  mutations: mutations,
  actions: actions
};
