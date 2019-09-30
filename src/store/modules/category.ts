import { MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store";
import { ClassInfo } from "@/models/ClassInfo";
import { Category, CategoryType } from "@/models/Category";

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
    const body = await rootState.api.category.getCategory(
      rootState.auth.spreadSheetsId
    );
    const categoryClassInfos = rootState.category.categoryClassInfos;

    body.results.forEach(result => {
      categoryClassInfos[result.category].push(ClassInfo.fromJson(result));
    });

    const categoryClassInfoKeys: string[] = Object.keys(categoryClassInfos);
    const categories: Category[] = categoryClassInfoKeys.map(
      categoryClassInfoKey => {
        const cateogoryType = CategoryType.categoryClassInfoKey;
        if (categoryClassInfos[categoryClassInfoKey].length) {
          return new Category(cateogoryType, categoryClassInfoKey, true);
        }

        return new Category(cateogoryType, categoryClassInfoKey, false);
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
