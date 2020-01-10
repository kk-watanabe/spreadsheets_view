import { ApiState } from "@/store/modules/api";
import HttpClient from "@/api/HttpClient";
import ApiCategory from "@/api/ApiCategory";

describe("api", () => {
  const httpClient = new HttpClient();
  const category = new ApiCategory(httpClient);
  let state!: ApiState;

  beforeEach(() => {
    state = { httpClient, category };
  });

  it("Check state", () => {
    expect(state.httpClient).toEqual(httpClient);
    expect(state.category).toEqual(category);
  });
});
