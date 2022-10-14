const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // // throw new NotImplementedError("Not implemented");
    // // remove line with error and write your code here
    let level = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let curent = 1;
        curent += this.calculateDepth(arr[i]);
        if (curent > level) {
          level = curent;
        }
      }
    }
    return level;
  }
}

module.exports = {
  DepthCalculator,
};

// console.log(new DepthCalculator().calculateDepth([1, 2, 3, [4, 5]]));
// console.log(new DepthCalculator().calculateDepth([[[]]]));
