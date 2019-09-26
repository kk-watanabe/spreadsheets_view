/**
 * category情報
 *
 * categoryの名前と入力されたclass情報があるか管理
 */

export class Category {
  constructor(
    public readonly name: string,
    public readonly disabled: boolean
  ) {}
}
