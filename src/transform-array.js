const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`);
    }
    if (arr.length === 0) return [];
    let result = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === '--discard-prev') {
        if (i - 1 >= 0) {
          result[result.length-1] = 'delete'
        }
      } else if (arr[i] === '--discard-next') {
        if (i + 1 < arr.length) {
          result.push('delete');
          i++;
        }
      } else if (arr[i] === '--double-prev'){
        if (i - 1 >= 0) {
          result.push(result[result.length - 1]);
        }
      } else if (arr[i] === '--double-next') {
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
      } else {
        result.push(arr[i]);
      }
      i++;
    }

   return result.filter(item => item !== 'delete');
}

module.exports = {
  transform
};
