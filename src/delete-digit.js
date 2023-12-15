const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let flag = false;
  if (n < 0) {
    flag = true;
  }
  let str = Math.abs(n).toString();
  let result = +str.slice(0,-1);
  for (let i = 0; i < str.length-1; i++){
    let temp = +(str.slice(0, i) + str.slice(i+1));
    result = result > (flag === true ? -temp : +temp) ? result : temp;
  }
  return result;
}

module.exports = {
  deleteDigit
};
