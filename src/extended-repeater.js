const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  str = String(str);
  if (!options.hasOwnProperty("repeatTimes")) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (options.hasOwnProperty("additionRepeatTimes")) {
    if (!options.hasOwnProperty("additionSeparator")) {
      options.additionSeparator = "|";
    }
  }
  if (options.hasOwnProperty("addition")) {
    options.addition = String(options.addition);
  }
  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);
    if (!options.hasOwnProperty("additionRepeatTimes")) {
      result.push(options.addition);
    }
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result.push(options.addition);
      if (
        j + 1 !== options.additionRepeatTimes &&
        options.additionRepeatTimes > 1
      ) {
        result.push(options.additionSeparator);
      }
    }
    if (i + 1 !== options.repeatTimes) {
      result.push(options.separator);
    }
  }
  result = result.filter((e) => e != undefined);
  return result.join("");
}

module.exports = {
  repeater,
};

// console.log(
//   repeater("la", {
//     repeatTimes: 3,
//     separator: "s",
//     addition: "+",
//     additionRepeatTimes: 1,
//   })
// );

// console.log(
//   repeater("TESTstr", {
//     separator: "ds",
//     addition: "ADD!",
//     additionSeparator: ")))000",
//   })
// );

// console.log(repeater("la", { repeatTimes: 3 }));

// console.log(
//   repeater("12345", { repeatTimes: 5, separator: "3 words separator" })
// );

// console.log(
//   repeater("REPEATABLE_STRING", {
//     repeatTimes: 2,
//     separator: "222",
//     addition: "ADDITION",
//     additionRepeatTimes: 3,
//   })
// );

// console.log(
//   repeater(null, {
//     repeatTimes: 3,
//     separator: "??? ",
//     addition: null,
//     additionRepeatTimes: 3,
//     additionSeparator: "!!!",
//   })
// );
