import { calculator } from "./calculator";
import { test } from "@jest/globals";

// ADD
test("argument is of type array", () => {
  expect(() => calculator.add({})).toThrow("Input must be an array");
  expect(() => calculator.add(1)).toThrow("Input must be an array");
  expect(() => calculator.add("")).toThrow("Input must be an array");
});

test("empty array returns 0", () => {
  expect(calculator.add([])).toBe(0);
});

test("array items must be numeric", () => {
  expect(() => calculator.add(["1"])).toThrow("Array elements must be numeric");
  expect(() => calculator.add([1, "1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.add(["1", 1])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.add([1, null])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.add([1, undefined])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.add([1, , 3])).toThrow(
    "Array elements must be numeric"
  );
});

test("adding with one number returns that number", () => {
  expect(calculator.add([0])).toBe(0);
  expect(calculator.add([1])).toBe(1);
  expect(calculator.add([11])).toBe(11);
});

test("adding with multiple integers returns correct sum", () => {
  expect(calculator.add([0, 1, 2, 3])).toBe(6);
  expect(calculator.add([10000000000000, 10000000000000])).toBe(20000000000000);
});

test("adding with multiple floats returns correct sum", () => {
  expect(calculator.add([0.0, 1.1, 2.2, 3.3])).toBeCloseTo(6.6);
  expect(calculator.add([1.234, 5.678])).toBeCloseTo(6.912);
});

// SUBTRACT
test("argument is of type array", () => {
  expect(() => calculator.subtract({})).toThrow("Input must be an array");
  expect(() => calculator.subtract(1)).toThrow("Input must be an array");
  expect(() => calculator.subtract("")).toThrow("Input must be an array");
});

test("empty array returns 0", () => {
  expect(calculator.subtract([])).toBe(0);
});

test("array items must be numeric", () => {
  expect(() => calculator.subtract(["1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.subtract([1, "1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.subtract(["1", 1])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.subtract([1, null])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.subtract([1, undefined])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.subtract([1, , 3])).toThrow(
    "Array elements must be numeric"
  );
});

test("subtract with one number returns that number", () => {
  expect(calculator.subtract([0])).toBe(0);
  expect(calculator.subtract([1])).toBe(-1);
  expect(calculator.subtract([11])).toBe(-11);
});

test("subtract with multiple integers subtracts them in order", () => {
  expect(calculator.subtract([0, 1, 2, 3])).toBe(-6);
  expect(calculator.subtract([10000000000000, 10000000000000])).toBe(
    -20000000000000
  );
});

test("subtract with multiple floats returns correct sum", () => {
  expect(calculator.subtract([0.0, 1.1, 2.2, 3.3])).toBeCloseTo(-6.6);
  expect(calculator.subtract([1.234, 5.678])).toBeCloseTo(-6.912);
});

// MULTIPLY
test("argument is of type array", () => {
  expect(() => calculator.multiply({})).toThrow("Input must be an array");
  expect(() => calculator.multiply(1)).toThrow("Input must be an array");
  expect(() => calculator.multiply("")).toThrow("Input must be an array");
});

test("empty array returns 1", () => {
  expect(calculator.multiply([])).toBe(1);
});

test("array items must be numeric", () => {
  expect(() => calculator.multiply(["1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.multiply([1, "1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.multiply(["1", 1])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.multiply([1, null])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.multiply([1, undefined])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.multiply([1, , 3])).toThrow(
    "Array elements must be numeric"
  );
});

test("multiply with one number returns that number", () => {
  expect(calculator.multiply([0])).toBe(0);
  expect(calculator.multiply([1])).toBe(1);
  expect(calculator.multiply([11])).toBe(11);
});

test("multiply with multiple integers returns correct product", () => {
  expect(calculator.multiply([1, 2, 3])).toBe(6);
  expect(calculator.multiply([1000000, 1000000])).toBe(1000000000000);
  expect(calculator.multiply([0, 2, 3])).toBe(0);
});

test("multiply with multiple floats returns correct product", () => {
  expect(calculator.multiply([1.1, 2.2, 3.3])).toBeCloseTo(7.986);
  expect(calculator.multiply([1.234, 5.678])).toBeCloseTo(7.0067);
});

// DIVIDE
test("argument is of type array", () => {
  expect(() => calculator.divide({})).toThrow("Input must be an array");
  expect(() => calculator.divide(1)).toThrow("Input must be an array");
  expect(() => calculator.divide("")).toThrow("Input must be an array");
});

test("empty array returns 1", () => {
  expect(() => calculator.divide([])).toThrow(
    "Reduce of empty array with no initial value"
  );
});

test("reject 0 value elements", () => {
  expect(() => calculator.divide([1, 0])).toThrow("");
});

test("array items must be numeric", () => {
  expect(() => calculator.divide(["1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.divide([1, "1"])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.divide(["1", 1])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.divide([1, null])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.divide([1, undefined])).toThrow(
    "Array elements must be numeric"
  );
  expect(() => calculator.divide([1, , 3])).toThrow(
    "Array elements must be numeric"
  );
});

test("divide with one number returns that number", () => {
  expect(calculator.divide([1])).toBe(1);
  expect(calculator.divide([11])).toBe(11);
});

test("divide with multiple integers returns correct result", () => {
  expect(calculator.divide([1, 2, 3])).toBeCloseTo(0.16666666666666666);
  expect(calculator.divide([1, 1000000])).toBe(0.000001);
  expect(calculator.divide([1, 10000000000000])).toBe(1e-13);
  expect(calculator.divide([10000000000000, 10000000000000])).toBe(1);
});

test("divide with multiple floats returns correct sum", () => {
  expect(calculator.divide([1.1, 2.2, 3.3])).toBeCloseTo(0.151515152);
  expect(calculator.divide([1.234, 5.678])).toBeCloseTo(0.217330046);
});
