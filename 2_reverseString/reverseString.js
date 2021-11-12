export default function reverseString(string) {
  if (typeof string === "string") {
    let reverse = [];
    for (let i of string) {
      reverse.unshift(i);
    }
    return reverse.join('');
  }
  throw new Error("Expected string");
}
