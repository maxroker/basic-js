const CustomError = require("../extensions/custom-error");

module.exports = function transform(baseArr) {
  let arr = [...baseArr];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];
    const next = arr[i + 1];
    switch (current) {
      case "--discard-prev":
        if (prev != "--ignore") newArr.pop();
        break;
      case "--discard-next":
        arr[i + 1] = "--ignore";
        break;
      case "--double-prev":
        if (i > 0 && prev != "--ignore") newArr.push(prev);
        break;
      case "--double-next":
        if (i < arr.length - 1) newArr.push(next);
        break;
      case "--ignore":
        break;
      default:
        newArr.push(current);
    }
  }
  return newArr;
};
