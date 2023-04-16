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
 */
function repeater(str, options) {
  let res = [];

  let repeat = 1;
  let separator = '';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '';

  if(options.repeatTimes) {
    repeat = options.repeatTimes;
    separator = '+';
  }

  if(options.separator) {
    separator = options.separator;
  }

  if(options.addition) {
    addition = options.addition;
    additionSeparator = '|';
  }

  if(options.addition === false || options.addition === null) {
    addition = options.addition+'';
    additionSeparator = '|';
  }

  if(options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if(options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  let add = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  // let addBuf = add.push(addition).repeat(additionRepeatTimes).join(additionSeparator)

  return Array(repeat).fill(str+add).join(separator);
  // return strb.push(str,addBuf).repeat(repeat).join(separator);
}

module.exports = {
  repeater
};
