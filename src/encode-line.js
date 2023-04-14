const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  let buf = {};
  let prev = '';

  for(let i of str){
    if(i != prev){
      delete buf[prev];
    }

    if(!buf[i]){
      buf[i] = 1;
    } else {
      buf[i]++;
      let s = buf[i]+i
      res.splice(-1,1,s)
    }
    if(buf[i] == 1){
      res.push(i);
    }
    
    prev = i;
  }

return res.join('');
}

module.exports = {
  encodeLine
};

 //   if(!hash[i]){
  //     hash[i] = 1;
  //   } else {
  //     hash[i]++;
  //   }
  // }

  // for(let i in hash){
  //   res += hash[i] + i;