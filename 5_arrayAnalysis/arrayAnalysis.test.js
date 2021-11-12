import { test } from "@jest/globals";
import arrayAnalysis from "./arrayAnalysis.js";

test("input must be an array", () => {
  expect(() => arrayAnalysis()).toThrow("Input must be an array.");
  expect(() => arrayAnalysis("")).toThrow("Input must be an array.");
  expect(() => arrayAnalysis(1)).toThrow("Input must be an array.");
  expect(() => arrayAnalysis({})).toThrow("Input must be an array.");
  expect(() => arrayAnalysis(null)).toThrow("Input must be an array.");
  expect(() => arrayAnalysis(undefined)).toThrow("Input must be an array.");
});
test("handles empty array", () => {
  expect(() => arrayAnalysis([])).toThrow("Input array is empty.");
});
test("elements must be numeric", () => {
  expect(() => arrayAnalysis(["a"])).toThrow("Input elements must be numeric.");
  expect(() => arrayAnalysis(["1"])).toThrow("Input elements must be numeric.");
  expect(() => arrayAnalysis(["?"])).toThrow("Input elements must be numeric.");
  expect(() => arrayAnalysis([1, "?"])).toThrow(
    "Input elements must be numeric."
  );
  expect(() => arrayAnalysis(["?", 1])).toThrow(
    "Input elements must be numeric."
  );
});
test("handles integers", () => {
  expect(arrayAnalysis([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
  expect(arrayAnalysis([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
test("handles negative numbers", () => {
  expect(arrayAnalysis([-1, -2, -3])).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3,
  });
  expect(arrayAnalysis([-1, -2, 3])).toEqual({
    average: 0,
    min: -2,
    max: 3,
    length: 3,
  });
});
test("handles zeros", () => {
  expect(arrayAnalysis([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
  expect(arrayAnalysis([1, 0, -4])).toEqual({
    average: -1,
    min: -4,
    max: 1,
    length: 3,
  });
});
test("handles floats", () => {
  expect(arrayAnalysis([1.1])).toEqual({
    average: 1.1,
    min: 1.1,
    max: 1.1,
    length: 1,
  });
  expect(arrayAnalysis([2.2, 6.2])).toEqual({
    average: 4.2,
    min: 2.2,
    max: 6.2,
    length: 2,
  });
});
