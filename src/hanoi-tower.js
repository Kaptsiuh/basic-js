const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const turn = 2 ** disksNumber - 1;
  const second = (3600 / turnsSpeed) * turn;
  const obj = {
    turns: turn,
    seconds: Math.floor(second),
  };
  return obj;
}

module.exports = {
  calculateHanoi,
};

// console.log(calculateHanoi(38, 4594));
