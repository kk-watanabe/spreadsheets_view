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
