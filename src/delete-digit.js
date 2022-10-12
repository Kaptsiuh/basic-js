const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrMax = [];
  for (let i = 0; i < n.toString().length; i++) {
    const arrN = [...n.toString()].map(Number);
    arrN.splice(i, 1);
    arrMax.push(arrN.join(""));
  }
  arrMax = arrMax.map(Number).sort((a, b) => b - a);
  return arrMax[0];
}

module.exports = {
  deleteDigit,
};

// console.log(deleteDigit(1524));
