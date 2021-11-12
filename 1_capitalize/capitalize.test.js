import capitalize from "./capitalize";

test("throw error for non-string inputs: nullish", () => {
  expect(() => capitalize()).toThrow("Expected string");
  expect(() => capitalize(null)).toThrow("Expected string");
});
test("throw error for non-string inputs: numbers", () => {
  expect(() => capitalize(0)).toThrow("Expected string");
  expect(() => capitalize(1)).toThrow("Expected string");
});
test("throw error for non-string inputs: objects", () => {
  expect(() => capitalize({})).toThrow("Expected string");
});
test("throw error for non-string inputs: boolean", () => {
  expect(() => capitalize(true)).toThrow("Expected string");
});
test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});
test("capitalizes one word", () => {
  expect(capitalize("i")).toBe("I");
  expect(capitalize("italy")).toBe("Italy");
});
test("capitalizes multiple words", () => {
  expect(capitalize("i i")).toBe("I I");
  expect(capitalize("italy italy")).toBe("Italy Italy");
});
test("handles whitespace: tabs", () => {
  expect(capitalize("\ti\ti")).toBe("\tI\tI");
  expect(capitalize("\titaly\titaly")).toBe("\tItaly\tItaly");
});
test("handles whitespace: newlines", () => {
  expect(capitalize("\ni\ni")).toBe("\nI\nI");
  expect(capitalize("\nitaly\nitaly")).toBe("\nItaly\nItaly");
});
test("handles already capitalized words", () => {
  expect(capitalize('iTalY Italy ITALY!')).toBe('ITalY Italy ITALY!')
});
test("handles words containing non-alphabetic chars", () => {
  expect(capitalize("don't cap1t@lize s:trange $text")).toBe(
    "Don't Cap1t@lize S:trange $text"
  );
});
