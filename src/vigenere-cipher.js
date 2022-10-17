const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(method = "true") {
    this._type = method;
  }

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  encrypt(message, key) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!message || !key) throw new Error("Incorrect arguments!");

    let koef = Math.ceil(message.length / key.length);
    key = key.repeat(koef).toUpperCase();
    message = message.toUpperCase();
    let keyArr = key.split("");
    let result = [];

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result.push(message[i]);
        keyArr.splice(i, 0, " ");
      } else {
        let letterIndex = 0;
        for (let j = 0; j < this.alphabet.length; j++) {
          if (this.alphabet[j] === message[i]) {
            letterIndex = j;
          }
        }
        let shift = 0;
        for (let k = 0; k < this.alphabet.length; k++) {
          if (this.alphabet[k] == keyArr[i]) {
            shift = k;
          }
        }
        let code = (letterIndex + shift) % 26;

        result.push(this.alphabet[code]);
      }
    }
    return this._type ? result.join("") : result.reverse().join("");
  }
  decrypt(message, key) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!message || !key) throw new Error("Incorrect arguments!");

    let koef = Math.ceil(message.length / key.length);
    key = key.repeat(koef).toUpperCase();
    message = message.toUpperCase();
    let keyArr = key.split("");
    let result = [];

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result.push(message[i]);
        keyArr.splice(i, 0, " ");
      } else {
        let letterIndex = 0;
        for (let j = 0; j < this.alphabet.length; j++) {
          if (this.alphabet[j] === message[i]) {
            letterIndex = j;
          }
        }
        let shift = 0;
        for (let k = 0; k < this.alphabet.length; k++) {
          if (this.alphabet[k] == keyArr[i]) {
            shift = k;
          }
        }
        let code = letterIndex - shift;
        if (code < 0) {
          code = 26 + code;
        }
        result.push(this.alphabet[code]);
      }
    }
    return this._type ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

// console.log(
//   new VigenereCipheringMachine().encrypt(
//     "ICWWQAM KECEIK JVZZT EADGG!",
//     "rollingscopes"
//   )
// );

// console.log(new VigenereCipheringMachine().encrypt("HSVD AJAL ^^", "behappy"));

// console.log(
//   new VigenereCipheringMachine().decrypt("TRVVFB VT JSUIFMYL!", "learning")
// );

// console.log(
//   new VigenereCipheringMachine().encrypt("Same length key", "Samelengthkey")
// );
