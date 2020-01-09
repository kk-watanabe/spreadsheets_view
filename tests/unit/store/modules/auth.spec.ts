import { ActionTree, ActionContext } from "vuex";
import { RootState } from "@/store";
import { inputClassInfo, categoryResults } from "@/api/ApiCategory";
import { LoginInfo } from "@/models/Login";
import { auth, AuthState } from "@/store/modules/auth";
import { CategoryClassInfos } from "@/store/modules/category";

describe("auth", () => {
  let state!: AuthState;

  beforeEach(() => {
    state = new AuthState();
  });

  it("Check state", () => {
    expect(state.spreadSheetsId).toEqual("");
    expect(state.spreadSheetsName).toEqual("");
    expect(state.disabledLogin).toEqual(false);
  });

  describe("mutations", () => {
    const {
      setSpreadSheetsId,
      setSpreadSheetsName,
      setDisabledLogin
    } = auth.mutations;

    it("setSpreadSheetsId set given data to spreadSheetsId of state", () => {
      const id = "test1234";
      expect(state.spreadSheetsId).toEqual("");
      setSpreadSheetsId(state, id);
      expect(state.spreadSheetsId).toEqual(id);
    });

    it("setSpreadSheetsName set given data to spreadSheetsName of state", () => {
      const name = "テスト";
      expect(state.spreadSheetsName).toEqual("");
      setSpreadSheetsName(state, name);
      expect(state.spreadSheetsName).toEqual(name);
    });

    it("setDisabledLogin set given data to disabledLogin of state", () => {
      const disabledLogin = true;
      expect(state.disabledLogin).toEqual(false);
      setDisabledLogin(state, disabledLogin);
      expect(state.disabledLogin).toEqual(disabledLogin);
    });
  });

  describe("getters", () => {
    describe("loggedIn", () => {
      const { loggedIn } = auth.getters;
      it("'loggedIn' returns false", () => {
        state.spreadSheetsId = "";

        const loggedInState: boolean = loggedIn(
          state,
          null,
          {} as RootState,
          null
        );

        expect(loggedInState).toEqual(false);
      });
      it("'loggedIn' returns true", () => {
        state.spreadSheetsId = "test1234";

        const loggedInState: boolean = loggedIn(
          state,
          null,
          {} as RootState,
          null
        );

        expect(loggedInState).toEqual(true);
      });
    });
  });

  describe("actions", () => {
    let commit!: unknown;
    let dispatch!: unknown;

    beforeEach(() => {
      commit = jest.fn();
      dispatch = jest.fn();
    });

    describe("login", () => {
      const login = (auth.actions as ActionTree<AuthState, RootState>)
        .login as (
        { commit, rootState }: ActionContext<AuthState, RootState>,
        info: LoginInfo
      ) => Promise<void>;

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

      const loginInfo: LoginInfo = {
        id: "test1234",
        name: "テスト"
      };

      describe("error", () => {
        const getCategory = jest.fn();
        const mockValue = {};
        getCategory.mockReturnValue(mockValue);
        const rootState = ({
          api: { category: { getCategory } },
          category: { categoryClassInfos }
        } as unknown) as RootState;
        it("action calls API once", async () => {
          await login(
            { commit, rootState } as ActionContext<AuthState, RootState>,
            loginInfo
          );
          expect(getCategory.mock.calls.length).toEqual(1);
        });
        it("action calls commit with a list of'disabledLogin'", async () => {
          await login(
            { commit, dispatch, rootState } as ActionContext<
              AuthState,
              RootState
            >,
            loginInfo
          );
          expect(commit).toHaveBeenCalledTimes(1);
          expect(commit).toHaveBeenCalledWith("setDisabledLogin", true);
        });
      });

      describe("success", () => {
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
          await login(
            { commit, rootState } as ActionContext<AuthState, RootState>,
            loginInfo
          );
          expect(getCategory.mock.calls.length).toEqual(1);
        });
        it("action calls commit with a list of 'spreadSheetsId' and 'spreadSheetsName' and 'disabledLogin'", async () => {
          await login(
            { commit, dispatch, rootState } as ActionContext<
              AuthState,
              RootState
            >,
            loginInfo
          );
          expect(commit).toHaveBeenCalledTimes(3);
          expect(commit).toHaveBeenCalledWith(
            "setSpreadSheetsId",
            loginInfo.id
          );
          expect(commit).toHaveBeenCalledWith(
            "setSpreadSheetsName",
            loginInfo.name
          );
          expect(commit).toHaveBeenCalledWith("setDisabledLogin", false);

          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith(
            "category/fetchCategoryClassInfo",
            loginInfo.id,
            {
              root: true
            }
          );
        });
      });
    });
  });
});
