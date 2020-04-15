/**
 * category情報
 *
 * categoryの名前と入力されたclass情報があるか管理
 */

export const CategoryType: { [kye: string]: number } = {
  title: 1,
  text: 2,
  icon: 3,
  button: 4,
  box: 5,
  list: 6,
  table: 7,
  column: 8,
  content: 9,
  other: 10,
};

export class Category {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly disabled: boolean
  ) {}
}
