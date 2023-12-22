const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct=true) {
    this.latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.direct = direct;
}

  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    let strToEncrypt = str.toUpperCase();
    let keyWord = key.toUpperCase();
    let result = [];
    let pos;
    let index;
    let keyLength = keyWord.length;
    let keyIndex = 0;
    for (let i = 0; i < strToEncrypt.length; i++) {
      pos = this.latin.indexOf(strToEncrypt[i]);
      if (pos === -1) {
        result.push(strToEncrypt[i]);
      } else {
        index = this.latin.indexOf(strToEncrypt[i]) + this.latin.indexOf(keyWord[keyIndex]);
        index = index < this.latin.length ? index : index - this.latin.length;
        result.push(this.latin[index]);
        keyIndex = keyIndex < keyLength-1 ? keyIndex + 1 : 0;
      }
    }
    if (!this.direct) result.reverse();
    return result.join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    /* Base calculations */
     let strToEncrypt = str.toUpperCase();
    let keyWord = key.toUpperCase();
    let result = [];
    let pos;
    let index;
    let keyLength = keyWord.length;
    let keyIndex = 0;
    for (let i = 0; i < strToEncrypt.length; i++) {
      pos = this.latin.indexOf(strToEncrypt[i]);
      if (pos === -1) {
        result.push(strToEncrypt[i]);
      } else {
        index = this.latin.indexOf(strToEncrypt[i]) - this.latin.indexOf(keyWord[keyIndex]);
        index = index > 0 ? index : (this.latin.length + index)%26;
        result.push(this.latin[index]);
        keyIndex = keyIndex < keyLength-1 ? keyIndex + 1 : 0;
      }
    }
    if (!this.direct) result.reverse();
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
