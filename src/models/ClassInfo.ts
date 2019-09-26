import { inputClassInfo } from "@/api/ApiCategory";

/**
 * class情報
 *
 * スプレットシートからに登録したclassの情報
 */

export class ClassInfo {
  constructor(
    public readonly rowIndex: number,
    public readonly id: number,
    public readonly className: string,
    public readonly description: string,
    public readonly displayExample: string,
    public readonly code: string
  ) {}

  public static fromJson(json: inputClassInfo): ClassInfo {
    return new ClassInfo(
      json.rowIndex,
      Number(json.id),
      json.className,
      json.description,
      json.displayExample,
      json.code
    );
  }
}
