import { inputClassInfo } from "@/api/ApiCategory";
import { ClassInfo } from "@/models/ClassInfo";

const inputClassInfo: inputClassInfo = {
  id: "1",
  rowIndex: 0,
  category: "title",
  className: ".test",
  description: "テスト",
  displayExample: "<div class='test1'>test</div>",
  code: "<div class='test1'>test</div>"
};

describe("ClassInfo", () => {
  it("Check constructor arguments", () => {
    const rowIndex: number = 1;
    const id: number = 1;
    const className: string = ".test1";
    const description: string = "sample text";
    const displayExample: string = "<div class='test1'>test</div>";
    const code: string = "<div class='test1'>test</div>";
    const classInfo = new ClassInfo(
      rowIndex,
      id,
      className,
      description,
      displayExample,
      code
    );

    expect(classInfo.rowIndex).toBe(rowIndex);
    expect(classInfo.id).toBe(id);
    expect(classInfo.className).toBe(className);
    expect(classInfo.description).toBe(description);
    expect(classInfo.displayExample).toBe(displayExample);
    expect(classInfo.code).toBe(code);
  });

  it("Return of fromJson is ClassInfo", () => {
    const result = ClassInfo.fromJson(inputClassInfo);
    const classInfo = new ClassInfo(
      inputClassInfo.rowIndex,
      Number(inputClassInfo.id),
      inputClassInfo.className,
      inputClassInfo.description,
      inputClassInfo.displayExample,
      inputClassInfo.code
    );

    expect(result).toEqual(classInfo);
  });
});
