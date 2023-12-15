const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  while (true) {
    let map = new Map();
    names.forEach(item => map.set(item, (map.has(item) ? map.get(item) + 1 : 0)));
    if (Array.from(map.values()).some(value => value > 0)) {
      let arr = [];
      names.reverse();
      let value;
      for (let name of names) {
        value = map.get(name)
        if (value > 0) {
          arr.push(name + '(' + value + ')');
          map.set(name, value-1);
        } else {
          arr.push(name);
        }
      }
    names =  arr.reverse()
    }else {
      break;
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
