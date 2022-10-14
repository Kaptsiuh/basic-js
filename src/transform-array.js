const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (newArr[i] === "--double-next") {
      newArr.pop();
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    }
    if (newArr[i] === "--double-prev") {
      newArr.pop();
      if (i > 0) {
        newArr.push(arr[i - 1]);
      }
    }
    if (newArr[i] === "--discard-next") {
      newArr.pop();
      if (i < arr.length - 1) {
        i += 2;
      }
    }
    if (newArr[i] === "--discard-prev") {
      newArr.pop();
      if (i > 0) {
        newArr.pop();
      }
    }
  }
  return newArr;
  //
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "--double-next") {
  //     newArr.push(arr[i + 1]);
  //   } else if (arr[i] === "--discard-next") {
  //     newArr.push(0);
  //   } else if (arr[i] === "--double-prev") {
  //     if (arr[i - 2] === "--discard-next") {
  //       newArr.push(0);
  //     } else {
  //       newArr.push(arr[i - 1]);
  //     }
  //   } else if (arr[i] === "--discard-prev") {
  //     newArr.splice(i - 1, 1, 0);
  //   } else {
  //     if (arr[i - 1] === "--discard-next") {
  //       newArr.push(0);
  //     } else {
  //       newArr.push(arr[i]);
  //     }
  //   }
  // }
  // return newArr.filter((e) => e > 0);
}

module.exports = {
  transform,
};

// console.log(transform(["--discrard-prev", 3, 4, 4]));

// console.log(transform([5, "--double-next", 3]));
