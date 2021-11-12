// A calculator object that contains the basic operations:
//  - add
//  - subtract
//  - divide
//  - multiply
"use strict";

const calculator = {
  _checkArray: function (input) {
    if (!Array.isArray(input)) {
      throw new Error("Input must be an array");
    }
    return input;
  },

  // add
  add: function (nums) {
    return [...this._checkArray(nums)].reduce((acc, num) => {
      if (typeof num === "number") {
        return acc + num;
      } else {
        throw new Error("Array elements must be numeric");
      }
    }, 0);
  },
  subtract: function (nums) {
    return [...this._checkArray(nums)].reduce((acc, num) => {
      if (typeof num === "number") {
        return acc - num;
      } else {
        throw new Error("Array elements must be numeric");
      }
    }, 0);
  },
  multiply: function (nums) {
    return [...this._checkArray(nums)].reduce((acc, num) => {
      if (typeof num === "number") {
        return acc * num;
      } else {
        throw new Error("Array elements must be numeric");
      }
    }, 1);
  },
  divide: function (nums) {
    let result = [...this._checkArray(nums)].reduce((acc, num) => {
      if (typeof num !== "number" || typeof acc !== "number") {
        throw new Error("Array elements must be numeric");
      } else {
        return acc / num;
      }
    });

    if (typeof result !== 'number') {
      throw new Error("Array elements must be numeric");
    }
    if (result === Infinity) {
      throw new Error("Array elements must be numeric");
    }
    return result;
  },

  //   if (!Array.isArray(nums)) {
  //     throw new Error("Input must be an array");
  //   }
  // },

  // subtract

  // divide

  // multiply
};

export { calculator };
