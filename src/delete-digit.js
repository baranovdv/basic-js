const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let A = (n+'').split('');

  let res = A.map(item => {
    let buf = A.slice();
    buf.splice(buf.indexOf(item),1);
    return buf.join('');
  })

  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
