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
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // console.log(typeof date);
  // console.log(date instanceof Date);
  // console.log(date.getMonth());
  // if (date === undefined) {
  //   return "Unable to determine the time of year!";
  // } else if (date instanceof Date) {
  //   if (
  //     date.getMonth() === 1 ||
  //     date.getMonth() === 11 ||
  //     date.getMonth() === 0
  //   ) {
  //     return "winter";
  //   } else if (date.getMonth() <= 4 && date.getMonth() >= 2) {
  //     return "spring";
  //   } else if (date.getMonth() <= 7 && date.getMonth() >= 5) {
  //     return "summer";
  //   } else if (date.getMonth() <= 10 && date.getMonth() >= 8) {
  //     return "autumn";
  //   }
  // } else {
  //   return "Invalid date!";
  // }

  if (date === undefined) {
    return "Unable to determine the time of year!";
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
  } else {
    return "Invalid date!";
  }

  // if (date === undefined) {
  //   return "Unable to determine the time of year!";
  // } else if (
  //   date.getMonth() === 1 ||
  //   date.getMonth() === 11 ||
  //   date.getMonth() === 0
  // ) {
  //   return "winter";
  // } else if (date.getMonth() <= 4 && date.getMonth() >= 2) {
  //   return "spring";
  // } else if (date.getMonth() <= 7 && date.getMonth() >= 5) {
  //   return "summer";
  // } else if (date.getMonth() <= 10 && date.getMonth() >= 8) {
  //   return "autumn";
  // } else {
  //   return "Invalid date!";
  // }
}

module.exports = {
  getSeason,
};

// console.log(getSeason(new Date(2020, 02, 31)));
