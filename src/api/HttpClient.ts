import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
Axios.defaults.baseURL = "https://api.sheetson.com/v1/sheets";

const API_VERSION: string = "2.0";

export default class HttpClient {
  async get<T>(url: string, params?: {}): Promise<T> {
    const config: AxiosRequestConfig = {};
    if (params) {
      config.params = params;
    }

    const res: AxiosResponse<T> = await Axios.get<T>(url, config);
    return res.data;
  }

  async post<T>(url: string, params: {}): Promise<T> {
    const config: AxiosRequestConfig = {};
    config.headers = {
      "api-version": API_VERSION,
      accept: "application/json, text/plain, */*",
      "If-Modified-Since": "Thu, 01 Jun 1970 00:00:00 GMT"
    };

    const res: AxiosResponse<T> = await Axios.post<T>(url, params, config);
    return res.data;
  }
}
