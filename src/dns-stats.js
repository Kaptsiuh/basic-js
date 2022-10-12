const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const domainsCount = {};
  domains = domains.map((e) => e.split("."));
  domains = domains.map((e) => e.reverse());
  let arr = [];
  for (let i = 0; i < domains.length; i++) {
    let element = "";
    for (let j = 0; j < domains[i].length; j++) {
      element += `.${domains[i][j]}`;
      arr.push(element);
    }
  }
  arr = arr.flat();
  arr.forEach((item) => {
    domainsCount[item] = (domainsCount[item] || 0) + 1;
  });
  return domainsCount;
}

module.exports = {
  getDNSStats,
};

// console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));
