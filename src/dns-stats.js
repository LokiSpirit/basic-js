const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();

  domains.forEach(item => {
    let arrDNS = item.split('.');
    let glue = '.';
    let prev = '';
    arrDNS.reverse();
    arrDNS.forEach(str => {
      key = prev + glue + str;
      if (map.has(key)) {
        map.set(key, map.get(key) + 1)
      } else {
        map.set(key, 1);
      }
      prev = key;
    });
  })
  return Object.fromEntries(Array.from(map));
}

module.exports = {
  getDNSStats
};
