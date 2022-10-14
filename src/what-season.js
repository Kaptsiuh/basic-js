const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  console.log(Object.prototype.toString.call(date));
  try {
    if (date === undefined) {
      return "Unable to determine the time of year!";
    } else if (
      (date instanceof Date === false ||
        Object.getOwnPropertyNames(date).length > 0) &&
      arguments.length > 0
    ) {
      throw new Error("Invalid date!");
    } else if (typeof date.getMonth() === "number") {
      if (
        date.getMonth() === 1 ||
        date.getMonth() === 11 ||
        date.getMonth() === 0
      ) {
        return "winter";
      } else if (date.getMonth() <= 4 && date.getMonth() >= 2) {
        return "spring";
      } else if (date.getMonth() <= 7 && date.getMonth() >= 5) {
        return "summer";
      } else if (date.getMonth() <= 10 && date.getMonth() >= 8) {
        return "autumn";
      }
    }
  } catch (err) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};

// console.log(getSeason(new Date(2020, 02, 31)));
