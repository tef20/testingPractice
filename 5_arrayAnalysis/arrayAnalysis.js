// Write a function that takes an array of numbers and
//  - returns an object
//  - with the following properties:
//     * average
//     * min
//     * max
//     * length

export default function arrayAnalysis(input) {
  checkInput(input);

  let result = input.reduce(
    (acc, cur, ind, array) => {
      checkIsNumeric(cur);
      return {
        average:
          acc.average === null
            ? cur
            : acc.average + (cur - acc.average) / (ind + 1),
        min: acc.min < cur ? acc.min : cur,
        max: acc.max > cur ? acc.max : cur,
        length: ind + 1,
      };
    },
    {
      average: null,
      min: Infinity,
      max: -Infinity,
      length: 0,
    }
  );

  return result;
}

function checkInput(item) {
  if (!Array.isArray(item)) {
    throw new Error("Input must be an array.");
  }
  if (item.length < 1) {
    throw new Error("Input array is empty.");
  }
}

function checkIsNumeric(elem) {
  if (typeof elem !== "number") {
    throw new Error("Input elements must be numeric.");
  }
}
