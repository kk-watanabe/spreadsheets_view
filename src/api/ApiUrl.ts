const SpreadsheetsId: string = "1WfLwCVSCe51c7jXqBNforLc2IxQKnrdjMGEcW0LLuZI";
const SpreadsheetsIdParameter: string = "?spreadsheetId=" + SpreadsheetsId;

export namespace ApiUrl {
  export const TITLE = "/title" + SpreadsheetsIdParameter;
  export const TEXT = "/text" + SpreadsheetsIdParameter;
  export const ICON = "/icon" + SpreadsheetsIdParameter;
  export const BUTTON = "/button" + SpreadsheetsIdParameter;
  export const BOX = "/box" + SpreadsheetsIdParameter;
  export const LIST = "/list" + SpreadsheetsIdParameter;
  export const TABLE = "/table" + SpreadsheetsIdParameter;
  export const COLUMN = "/column" + SpreadsheetsIdParameter;
  export const CONTENT = "/content" + SpreadsheetsIdParameter;
  export const OTHER = "/other" + SpreadsheetsIdParameter;
}
