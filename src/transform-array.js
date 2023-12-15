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
 /*  let excluded = []
  try {
    if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
    if (arr.length === 0) return [];
    let result = [...arr];
    arr.forEach((item, index) => {
      if (item === '--discard-prev'
        && (index - 1 >= 0)
        && Number.isFinite(arr[index - 1])) {
        result[index - 1] = 'delete';
      }

      if (item === '--discard-next'
        && (index + 1 < arr.length)
        && Number.isFinite(arr[index + 1])) {
        result[index + 1] = 'delete';
      }

      if (item === '--double-prev'
        && (index - 1 >= 0)
        && Number.isFinite(result[index - 1])) {
        result.splice(index, 0, arr[index - 1]);
      }

      if (item === '--double-next'
        && (index + 1 < arr.length)
        && Number.isFinite(arr[index + 1])) {
        result.splice(index, 0, arr[index + 1]);
      }
    });
    result = result.filter(item => Number.isFinite(item));

    return result;
  } catch(e) {
    throw e;
  } */

    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
