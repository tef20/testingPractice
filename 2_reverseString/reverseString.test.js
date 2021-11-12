import reverseString from "./reverseString";
import { test } from "@jest/globals";

test("throw error for non-string inputs: nullish", () => {
  expect(() => reverseString()).toThrow("Expected string");
  expect(() => reverseString(null)).toThrow("Expected string");
});
test("throw error for non-string inputs: numbers", () => {
  expect(() => reverseString(0)).toThrow("Expected string");
  expect(() => reverseString(1)).toThrow("Expected string");
});
test("throw error for non-string inputs: objects", () => {
  expect(() => reverseString({})).toThrow("Expected string");
});
test("throw error for non-string inputs: boolean", () => {
  expect(() => reverseString(true)).toThrow("Expected string");
});
test("handles empty string", () => {
  expect(reverseString("")).toBe("");
});
test("handles single letter string", () => {
  expect(reverseString("i")).toBe("i");
});
test("reverseString one word", () => {
  expect(reverseString("italy")).toBe("ylati");
});
test("handle strings containing various whitespace", () => {
  expect(reverseString("italy italy\titaly\nitaly")).toBe(
    "ylati\nylati\tylati ylati"
  );
});
test("handles strings containing non-alphabetic chars", () => {
  expect(reverseString('q1:@"[$')).toBe('$["@:1q');
});
