export default function caeserEncrypt(message, shift) {
  if (typeof message !== "string") {
    throw new Error("Message must be a string.");
  }
  if (!Number.isInteger(shift)) {
    throw new Error("Shift must be an integer.");
  }
  let encrypted = "";
  for (let char of message) {
    let ascii = char.charCodeAt(0);
    if (ascii > 64 && ascii < 91) {
      // uppercase
      encrypted += String.fromCharCode(mod(ascii - 65 + shift, 26) + 65);
    } else if (ascii > 96 && ascii < 123) {
      // lowercase
      encrypted += String.fromCharCode(mod(ascii - 97 + shift, 26) + 97);
    } else {
      // non-alpha
      encrypted += String.fromCharCode(ascii);
    }
  }
  return encrypted;
}

function mod(a, b) {
  return ((a % b) + b) % b;
}
