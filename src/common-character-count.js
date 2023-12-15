const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
    let mapStr1 = new Map();
    let mapStr2 = new Map();
    fillMap(s1, mapStr1);
    fillMap(s2, mapStr2);
    let result = 0;
    for (let [key, value] of mapStr1.entries()) {
        if (mapStr2.has(key)) {
            result += Math.min(value, mapStr2.get(key))
        }
    }
    return result;
}

function fillMap(str, map) {
    for(let i=0; i< str.length; i++) {
        if (map.has(str[i])) {
            let value = 1 + map.get(str[i]);
            map.set(str[i], value);
        } else {
            map.set(str[i], 1);
        }
    }
}
module.exports = {
  getCommonCharacterCount
};
