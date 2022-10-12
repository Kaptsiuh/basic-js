const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let coincidences = 0;
  const arr2 = [...s2];
  s1.replace(/[0-Z]/gi, (a, b, c) => {
    for (let i = 0; i < s2.length; i++) {
      if (a === arr2[i]) {
        coincidences += 1;
        arr2[i] = "*";
        break;
      }
    }
  });
  return coincidences;
}

module.exports = {
  getCommonCharacterCount,
};
