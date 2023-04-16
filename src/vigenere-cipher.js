const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(phrase, key) {
    if(!phrase || !key) {
      throw new Error("Incorrect arguments!");
    }
    

    let matrix = [];

    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i=0; i < 26; i++){
      matrix[i] = [...alphabet];
      alphabet[alphabet.length-1] = alphabet.splice(0,1)[0];
    }


    let res = '';
    let j = 0;
    phrase = phrase.toLowerCase();
    key = key.toLowerCase();
    for(let i = 0; i < phrase.length; i++) {
      
      if(!/[a-z]/.test(phrase[i])){
        res += phrase[i];
        j--;
      } else {
        res += matrix[alpha.indexOf(key[j%(key.length)])][alpha.indexOf(phrase[i])];

      }
      j++;
    }
    
    return res.toUpperCase();

  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}

module.exports = {
  VigenereCipheringMachine
};
