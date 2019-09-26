import HttpClient from "@/api/HttpClient";
import ApiCategory from "@/api/ApiCategory";

export class ApiState {
  httpClient = new HttpClient();
  category = new ApiCategory(this.httpClient);
}

export const api = {
  namespaced: true,
  state: new ApiState()
};
