const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chainArray: [],
  getLength() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.chainArray.length;
  },
  addLink(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (
      position > 0 &&
      position <= this.chainArray.length - 1 &&
      typeof position === "number"
    ) {
      this.chainArray.splice(position - 1, 1);
      return this;
    }
    this.chainArray = [];

    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let result = this.chainArray.join("~~");
    this.chainArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

// console.log(chainMaker.addLink(1).addLink(2));

// console.log(chainMaker.chainArray);

// console.log(
//   chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()
// );

// console.log(
//   chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
// );

// console.log(
//   chainMaker
//     .addLink("GHI")
//     .addLink(null)
//     .reverseChain()
//     .addLink(333)
//     .reverseChain()
//     .reverseChain()
//     .addLink(0)
//     .reverseChain()
//     .reverseChain()
//     .addLink("GHI")
//     .finishChain()
// );
