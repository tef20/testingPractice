import { test } from "@jest/globals";
import caeserEncrypt from "./caeserCipher";

test("Message must be a string", () => {
  expect(() => caeserEncrypt()).toThrow("Message must be a string.");
  expect(() => caeserEncrypt(1)).toThrow("Message must be a string.");
  expect(() => caeserEncrypt([])).toThrow("Message must be a string.");
  expect(() => caeserEncrypt({})).toThrow("Message must be a string.");
  expect(() => caeserEncrypt(undefined)).toThrow("Message must be a string.");
  expect(() => caeserEncrypt(null)).toThrow("Message must be a string.");
  expect(() => caeserEncrypt("string")).not.toThrow(
    "Message must be a string."
  );
});
test("Shift must be a integer", () => {
  expect(() => caeserEncrypt("text")).toThrow("Shift must be an integer.");
  expect(() => caeserEncrypt("text", "text")).toThrow(
    "Shift must be an integer."
  );
  expect(() => caeserEncrypt("text", 1.1)).toThrow("Shift must be an integer.");
  expect(() => caeserEncrypt("text", [])).toThrow("Shift must be an integer.");
  expect(() => caeserEncrypt("text", {})).toThrow("Shift must be an integer.");
  expect(() => caeserEncrypt("text", undefined)).toThrow(
    "Shift must be an integer."
  );
  expect(() => caeserEncrypt("text", null)).toThrow(
    "Shift must be an integer."
  );
  expect(() => caeserEncrypt("text", 1)).not.toThrow(
    "Shift must be an integer."
  );
});
test("Correctly shifts single-letter strings", () => {
  expect(caeserEncrypt("a", 1)).toBe("b");
  expect(caeserEncrypt("a", 5)).toBe("f");
});
test("Correctly shifts multi-letter strings", () => {
  expect(caeserEncrypt("abcde", 1)).toBe("bcdef");
  expect(caeserEncrypt("acegi", 1)).toBe("bdfhj");
});
test("Preserves case", () => {
  expect(caeserEncrypt("A", 1)).toBe("B");
});
test("Handles empty string", () => {
  expect(caeserEncrypt("", 1)).toBe("");
});
test("Handles 0 value shift", () => {
  expect(caeserEncrypt("text", 0)).toBe("text");
});
test("Handles negative shift value", () => {
  expect(caeserEncrypt("b", -1)).toBe("a");
});
test("Correctly handles shifts at both ends of alphabet", () => {
  expect(caeserEncrypt("z", 1)).toBe("a");
  expect(caeserEncrypt("a", -1)).toBe("z");
  expect(caeserEncrypt("Z", 1)).toBe("A");
  expect(caeserEncrypt("A", -1)).toBe("Z");
});
test("Safely ignores non-alphabetic chars", () => {
  expect(caeserEncrypt('10!"£$%^&*(){}@~?/', 1)).toBe('10!"£$%^&*(){}@~?/');
  expect(caeserEncrypt('10!"£$%^&*(){}@~?/', -1)).toBe('10!"£$%^&*(){}@~?/');
  expect(caeserEncrypt('10!"£$%^&*(){}@~?/', 30)).toBe('10!"£$%^&*(){}@~?/');
  expect(caeserEncrypt('10!"£$%^&*(){}@~?/', -30)).toBe('10!"£$%^&*(){}@~?/');
});
test("Handles whitespace", () => {
  expect(caeserEncrypt(" a  b\tc\nd", 1)).toBe(" b  c\td\ne");
});
