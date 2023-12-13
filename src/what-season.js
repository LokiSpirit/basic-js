const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let seasons = {
    0: 'winter',
    1: 'winter',
    11: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn'
  }
  try {
    if (arguments.length === 0) return 'Unable to determine the time of year!';
    if (date instanceof Date) {
      date.setTime(date.getTime())
    }
    return seasons[date.getMonth()];
  } catch(e){
    throw new Error('Invalid date!');
}
}

module.exports = {
  getSeason
};
