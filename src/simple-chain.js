const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    
    if(!this.chainArray){
      this.chainArray = [];
      this.chainArray.push(value+'');
    } else {
      this.chainArray.push(value+'');
    }
    return this;
  },
  removeLink(position) {
    if(!this.chainArray[position-1] || position > this.chainArray.length || position < 0) {
      delete this.chainArray;
      throw new Error("You can't remove incorrect link!");
    }

    this.chainArray.splice(position - 1,1);
    return this;
  },
  reverseChain() {
    if(!this.chainArray){
      return this;
    }
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let bufArray = [];
    this.chainArray.forEach(item => {
      bufArray.push(`( ${item} )`)
    });
    delete this.chainArray;
    return bufArray.join('~~')
  }
};

module.exports = {
  chainMaker
};
