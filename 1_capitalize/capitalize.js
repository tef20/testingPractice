export default function capitalize(string) {
  // - accept string
  // - capitalizes any word-initial alphabetical characters
  // - return string
  if (typeof string === "string") {
    let capitalized = "";
    for (let i in string) {
      if (i - 1 < 0 || /\s/.test(string[i - 1])) {
        capitalized += string[i].toUpperCase();
      } else {
        capitalized += string[i];
      }
    }
    
    return capitalized;
  }
  throw new Error("Expected string");
}
