import HttpClient from "@/api/HttpClient";

export interface inputClassInfo {
  id: string;
  rowIndex: number;
  category: string;
  className: string;
  description: string;
  displayExample: string;
  code: string;
}

export interface categoryResults {
  results: inputClassInfo[];
}

export default class ApiCategory {
  constructor(private readonly httpClient: HttpClient) {}

  public getCategory = (): Promise<categoryResults> => {
    return this.httpClient.get<categoryResults>();
  };
}
