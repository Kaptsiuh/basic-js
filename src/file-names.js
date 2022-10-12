const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  if (names.length === 0) {
    return arr;
  }
  arr.push(names[0]);
  for (let i = 1; i < names.length; i++) {
    let x = -1;
    for (let j = 0; j <= i; j++) {
      if (names[i] === names[j]) {
        x += 1;
      }
      if (names[i][names[i].length - 1] === ")") {
        if (names[i] === arr[j]) {
          x += 1;
        }
      }
    }
    if (x === 0) {
      arr.push(`${names[i]}`);
    } else {
      arr.push(`${names[i]}(${x})`);
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
// console.log(renameFiles([]));
