const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!this.co) {
      this.co = 1;
      this.max = 1;
    }
    arr.forEach(item => {
     if(Array.isArray(item)) {
       this.co += 1;
       if(this.co > this.max) {
         this.max = this.co;
       }
       this.calculateDepth(item);
     }
   })
   this.co -= 1;
   return this.max;
  }
}

module.exports = {
  DepthCalculator
};
