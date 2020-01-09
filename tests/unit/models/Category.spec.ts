import { Category } from "@/models/Category";

describe("Category", () => {
  it("Check constructor arguments", () => {
    const id: number = 1;
    const name: string = "title";
    const disabled: boolean = true;
    const category = new Category(id, name, disabled);

    expect(category.id).toBe(id);
    expect(category.name).toBe(name);
    expect(category.disabled).toBe(disabled);
  });
});
