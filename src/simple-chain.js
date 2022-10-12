const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chainArray: [],
  getLength() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return chainMaker.chainArray.length;
  },
  addLink(value) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    chainMaker.chainArray.push(value);
  },
  removeLink(position) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    chainMaker.chainArray.splice(position, 1);
  },
  reverseChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    chainMaker.chainArray.reverse();
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
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
