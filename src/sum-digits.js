const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = [...n.toString()].map(Number);
  let sum = 0;
  rec(n);
  function rec(arg) {
    n.forEach((e, i, arr) => {
      sum += e;
      if (arr.length - 1 === i) {
        n = [...sum.toString()].map(Number);
        sum = 0;
      }
    });
  }
  if (n.length > 1) {
    rec(n);
  }
  return n[0];
}

module.exports = {
  getSumOfDigits,
};

// console.log(getSumOfDigits(91));
// console.log(getSumOfDigits(35));
