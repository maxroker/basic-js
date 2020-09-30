const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    if (!Array.isArray(arr)) return maxDepth;
    if (arr.length >= 0) {
      for (let k in arr) {
        let depth = this.calculateDepth(arr[k]);
        if (depth > maxDepth) maxDepth = depth;
      }
    }
    return maxDepth + 1;
  }
};
