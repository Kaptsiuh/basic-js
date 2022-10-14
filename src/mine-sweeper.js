const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let x = matrix[0].length;
  let y = matrix.length;
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (matrix[i][j] === true) {
        matrix[i][j] = true;
      } else {
        matrix[i][j] = 0;
        if (i > 0) {
          if (matrix[i - 1][j] === true) {
            matrix[i][j] += 1;
          }
        }
        if (i > 0 && j > 0) {
          if (matrix[i - 1][j - 1] === true) {
            matrix[i][j] += 1;
          }
        }
        if (i > 0 && j < x - 1) {
          if (matrix[i - 1][j + 1] === true) {
            matrix[i][j] += 1;
          }
        }
        if (j > 0) {
          if (matrix[i][j - 1] === true) {
            matrix[i][j] += 1;
          }
        }
        if (j < x - 1) {
          if (matrix[i][j + 1] === true) {
            matrix[i][j] += 1;
          }
        }
        if (i < y - 1 && j > 0) {
          if (matrix[i + 1][j - 1] === true) {
            matrix[i][j] += 1;
          }
        }
        if (i < y - 1) {
          if (matrix[i + 1][j] === true) {
            matrix[i][j] += 1;
          }
        }
        if (i < y - 1 && j < x - 1) {
          if (matrix[i + 1][j + 1] === true) {
            matrix[i][j] += 1;
          }
        }
      }
    }
  }
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (matrix[i][j] === true) {
        matrix[i][j] = 1;
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper,
};

// console.log(
//   minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
//   ])
// );