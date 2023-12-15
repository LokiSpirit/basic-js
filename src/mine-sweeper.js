const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let arr;
    for (let i = 0; i < matrix.length; i++){
      arr = [];
      for (let j = 0; j < matrix[0].length; j++){
      let a11 = (i - 1 >= 0) && (j - 1 >= 0) ? matrix[i - 1][j - 1] : 0;
      let a12 = (i - 1) >= 0 ? +matrix[i - 1][j] : 0;
      let a13 = (i - 1 >= 0) && (j + 1 < matrix[0].length) ? +matrix[i - 1][j + 1] : 0;
      let a21 = (j - 1 >=0) ? +matrix[i][j - 1] : 0;
      let a23 = (j + 1 < matrix[0].length) ? +matrix[i][j + 1] : 0;
      let a31 = (j - 1 >= 0) && (i + 1 < matrix.length) ? +matrix[i+1][j-1] : 0;
      let a32 = (i + 1 < matrix.length) ? +matrix[i+1][j] : 0;
      let a33 = (j + 1 < matrix[0].length) && (i + 1 < matrix.length) ? +matrix[i+1][j+1] : 0;

      arr.push(0 + a11 + a12 + a13 + a21 + a23 + a31 + a32 + a33);
      };
    result.push(arr);
  }
  return result;
}

module.exports = {
  minesweeper
};
