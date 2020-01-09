import { ActionTree, ActionContext } from "vuex";
import { RootState } from "@/store";
import { inputClassInfo, categoryResults } from "@/api/ApiCategory";
import { ClassInfo } from "@/models/ClassInfo";
import { Category, CategoryType } from "@/models/Category";
import {
  category,
  CategoryState,
  CategoryClassInfos
} from "@/store/modules/category";

describe("category", () => {
  const categories: Category[] = [];
  const categoryClassInfos: CategoryClassInfos = {
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
  let state!: CategoryState;

  beforeEach(() => {
    state = { categories, categoryClassInfos };
  });

  const updateCategories: Category[] = [
    new Category(1, "title", true),
    new Category(2, "text", true),
    new Category(3, "icon", false),
    new Category(4, "button", true),
    new Category(5, "box", true),
    new Category(6, "list", false),
    new Category(7, "table", false),
    new Category(8, "column", false),
    new Category(9, "content", false),
    new Category(10, "other", false)
  ];

  const updateCategoryClassInfos: CategoryClassInfos = {
    box: [
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      },
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      }
    ],
    button: [
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      },
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      }
    ],
    column: [],
    content: [],
    icon: [],
    list: [],
    other: [],
    table: [],
    text: [
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      },
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      }
    ],
    title: [
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      },
      {
        className: ".test",
        code: "<div class='test1'>test</div>",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        id: 1,
        rowIndex: 0
      }
    ]
  };

  it("Check state", () => {
    expect(state.categories).toEqual(categories);
    expect(state.categoryClassInfos).toEqual(categoryClassInfos);
  });
  describe("mutations", () => {
    const { setCategories, setCategoryClassInfo } = category.mutations;
    it("setCategories set given data to categories of state", () => {
      expect(state.categories).toEqual([]);
      setCategories(state, updateCategories);
      expect(state.categories).toEqual(updateCategories);
    });
    it("setCategoryClassInfo set given data to categoryClassInfos of state", () => {
      expect(state.categoryClassInfos).toEqual({
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
      });
      setCategoryClassInfo(state, updateCategoryClassInfos);
      expect(state.categoryClassInfos).toEqual(updateCategoryClassInfos);
    });
  });
  describe("actions", () => {
    let commit!: unknown;

    beforeEach(() => {
      commit = jest.fn();
    });

    describe("fetchCategoryClassInfo", () => {
      const fetchCategoryClassInfo = (category.actions as ActionTree<
        CategoryState,
        RootState
      >).fetchCategoryClassInfo as (
        { commit, rootState }: ActionContext<CategoryState, RootState>,
        id: string
      ) => Promise<void>;
      const getCategory = jest.fn();

      const titleInputClassInfo: inputClassInfo = {
        id: "1",
        rowIndex: 0,
        category: "title",
        className: ".test",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        code: "<div class='test1'>test</div>"
      };
      const textInputClassInfo: inputClassInfo = {
        id: "1",
        rowIndex: 0,
        category: "text",
        className: ".test",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        code: "<div class='test1'>test</div>"
      };
      const buttonInputClassInfo: inputClassInfo = {
        id: "1",
        rowIndex: 0,
        category: "button",
        className: ".test",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        code: "<div class='test1'>test</div>"
      };
      const boxInputClassInfo: inputClassInfo = {
        id: "1",
        rowIndex: 0,
        category: "box",
        className: ".test",
        description: "テスト",
        displayExample: "<div class='test1'>test</div>",
        code: "<div class='test1'>test</div>"
      };
      const mockValue: categoryResults = {
        results: [
          titleInputClassInfo,
          textInputClassInfo,
          buttonInputClassInfo,
          boxInputClassInfo
        ]
      };
      getCategory.mockReturnValue(mockValue);

      const rootState = ({
        api: { category: { getCategory } },
        category: { categoryClassInfos }
      } as unknown) as RootState;

      it("action calls API once", async () => {
        await fetchCategoryClassInfo(
          { commit, rootState } as ActionContext<CategoryState, RootState>,
          "id1"
        );
        expect(getCategory.mock.calls.length).toEqual(1);
      });
      it("action calls commit with a list of 'SearchEngine'", async () => {
        await fetchCategoryClassInfo(
          { commit, rootState } as ActionContext<CategoryState, RootState>,
          "id1"
        );
        expect(commit).toHaveBeenCalledTimes(2);
        expect(commit).toHaveBeenCalledWith(
          "setCategoryClassInfo",
          updateCategoryClassInfos
        );
        expect(commit).toHaveBeenCalledWith("setCategories", updateCategories);
      });
    });
  });
});
