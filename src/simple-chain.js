const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position >= this.chain.length) {
      this.chain = [];
      throw new Error("THROWN");
    }
    let startChain = this.chain.slice(0, position - 1);
    let endChain = this.chain.slice(position);
    this.chain = startChain;
    endChain.forEach((link) => this.chain.push(link));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join("~~");
    this.chain = [];
    return str;
  },
};

module.exports = chainMaker;
