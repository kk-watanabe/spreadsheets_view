import HttpClient from "@/api/HttpClient";

export class ApiState {
  httpClient = new HttpClient();
}

export const api = {
  namespaced: true,
  state: new ApiState()
};
