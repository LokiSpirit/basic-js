const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * options is an object of options, that contains properties:
* repeatTimes sets the number of repetitions of the str;
* separator is a string separating repetitions of the str;
* addition is an additional string that will be added to each repetition of the str;
* additionSeparator is a string separating repetitions of the addition.
* additionRepeatTimes sets the number of repetitions of the addition;
*
*/
/* assert.equal(repeater('la', { repeatTimes: 3 }), 'la+la+la'); */

function repeater(str, options) {

  let addition = options.addition === undefined ? '' : String(options.addition);
  let addTimes = options.additionRepeatTimes || 1;
  let addArr = [];
  for (let i = 0; i < addTimes; i++){
    addArr.push(addition);
  }
  let additionSeparator = String(options.additionSeparator ||
    (addition.length === 0 ? '' : '|'));
  let gluedAdditional = addArr.join(additionSeparator);
  str = str  + gluedAdditional;

  let strTimes = options.repeatTimes || 1;
  let strArr = [];
  for (let i = 0; i < strTimes; i++){
    strArr.push(str);
  }
  return strArr.join(String(options.separator || '+'));
}

module.exports = {
  repeater
};
