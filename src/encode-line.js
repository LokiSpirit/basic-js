const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let end = 0;
  let count = 0;
  let ch = str[count];
  let result = '';
  while (end < str.length) {
    while (end + count < str.length && ch === str[end + count]) {
      count++;
    }
    result += count > 1 ? count + ch : ch;
    if ((end = end + count) >= str.length) return result;
   /*  end = end + count; */
    ch = str[end];
    count = 0;
  }
  return result;
}

module.exports = {
  encodeLine
};
