const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let index = 0;
  let end = matrix.length;
  let result = matrix[index].reduce((sum, item) => sum + item, 0);
  let top;
  while (index+1 < end) {
    top = matrix[index];
    for (let i = 0; i < top.length; i++){
      result += top[i] === 0 ? 0 : matrix[index + 1][i];
    }
    index++;
  }
  return result;
}


module.exports = {
  getMatrixElementsSum
};
