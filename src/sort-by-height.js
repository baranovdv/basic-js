const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let bufIndex = [];
  let arrCopy = arr.slice();
  arr.forEach(item => {
    if(item == -1) {
      let extra = arrCopy.lastIndexOf(-1);
      arrCopy = arrCopy.slice(0,extra);
      bufIndex.push(extra);
    }
  })
  arr = arr.filter(n => n !== -1).sort((a,b) => (a-b));
  
  bufIndex.reverse().forEach(item => {
    arr.splice(item,0,-1);
  })
  
  return arr;
}

module.exports = {
  sortByHeight
};
