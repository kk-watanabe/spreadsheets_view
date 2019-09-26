import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const BASE_URL: string = "https://api.sheetson.com/v1/sheets";
const API_VERSION: string = "2.0";
const SPREAD_SHEETS_ID: string = "1WfLwCVSCe51c7jXqBNforLc2IxQKnrdjMGEcW0LLuZI";
const SPREAD_SHEETS_URL: string = BASE_URL + "/style-guide?spreadsheetId=";

export default class HttpClient {
  async get<T>(id: string, params?: {}): Promise<T> {
    const config: AxiosRequestConfig = {};
    if (params) {
      config.params = params;
    }
    const res: AxiosResponse<T> = await Axios.get<T>(
      SPREAD_SHEETS_URL + id,
      config
    );
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
