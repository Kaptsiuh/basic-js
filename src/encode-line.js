const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = [];
  str = str.split("");
  let number = 0;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      number += 1;
    } else {
      number += 1;
      if (number === 1) {
        result.push(str[i - 1]);
      } else {
        result.push(number, str[i - 1]);
      }
      number = 0;
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};

// console.log(encodeLine("aabbbc"));
