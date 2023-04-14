const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }


  let res = arr.slice();
  
  if(arr.includes('--double-next')) {
    res.splice(arr.indexOf('--double-next'),1,arr[arr.indexOf('--double-next')+1]);
  }
  
  if(arr.includes('--discard-prev')) {
    if(arr.indexOf('--discard-prev') == 0) {
      res.splice(0,1,null);
    } else {
          res.splice(arr.indexOf('--discard-prev') - 1,2,null);
    }
  }

  if(arr.includes('--discard-next')) {
    res.splice(arr.indexOf('--discard-next'),2,null);
  }

  if(arr.includes('--double-prev')) {
    if(res[arr.indexOf('--double-prev') - 1] == null){
        res.splice(res.indexOf('--double-prev'),1)
      } else {
        res.splice(res.indexOf('--double-prev'),1,res[res.indexOf('--double-prev')-1]);
      }
    }
  
  return res.filter(n => n);
}


module.exports = {
  transform
};
