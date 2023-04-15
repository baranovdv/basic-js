const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  
  function c(n) {
    return (n + '').split('').reduce((acc,item) => {
      return acc+Number(item);
    },0) 
  }
  
  function sd(num) {
    let n = c(num);
  
    if(n < 10) {
      return n;
    } else {
      return sd(n);
    }
  }

  return sd(n);
}

module.exports = {
  getSumOfDigits
};
