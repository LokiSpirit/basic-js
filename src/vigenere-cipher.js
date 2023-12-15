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

  constructor(direct) {
  /*   try {
      if (arguments.length === 0) throw new Error();
      } catch(e) {
      throw e;
    } */
    this.latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.direct = direct;
  }
  encrypt(str, key) {
    try {
      if (arguments.length === 0) throw new Error();
    } catch (e) {
      throw e;
    }
    let strToEncrypt = str.toUpperCase();
    let keyWord = key.toUpperCase();
    let result = [];
    let pos;
    let index;
    let keyLength = keyWord.length;
    let keyIndex = 0;
    for (let i = 0; i < strToEncrypt.length; i++){
      pos = this.latin.indexOf(strToEncrypt[i]);
      if (pos === -1) {
        result.push(strToEncrypt[i]);
      } else {
        index = this.latin.indexOf(keyWord[keyIndex%keyLength]) * 2;
        index = index < this.latin.length ? index : index - this.latin.length;
        result.push(this.latin[index]);
        keyIndex++;
      }
    }
    return result.join('');
  }

  decrypt(str, key) {
    try {
      if (arguments.length === 0) throw new Error();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
