import Vue from "vue";
import { Wrapper } from "@vue/test-utils";

/**
 * Emittedが1回呼ばれたかをチェックする
 *
 * @param wrapper
 * @param event
 */
export function checkOneCalledEmitted(wrapper: Wrapper<Vue>, event: string) {
  const emitted = wrapper.emitted(event) as any[];

  expect(wrapper.emitted(event)).toBeTruthy();
  expect(emitted.length).toBe(1);
}

/**
 * Emittedが1回だけ呼ばれて、指定のvalueを返しているかチェックする
 *
 * @param wrapper
 * @param event
 * @param value
 */
export function checkEmittedValue(
  wrapper: Wrapper<Vue>,
  event: string,
  value: any
) {
  const emitted = wrapper.emitted(event) as any[];
  checkOneCalledEmitted(wrapper, event);
  console.log(emitted[0]);
  expect(emitted[0]).toEqual([value]);
}
