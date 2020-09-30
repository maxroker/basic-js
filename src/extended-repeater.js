const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
  let addition;
  if (obj.addition === false) {
    addition = "false";
  } else if (obj.addition === null) {
    addition = "null";
  } else {
    addition = obj.addition || "";
  }
  let additionRepeatTimes = obj.additionRepeatTimes || 1;
  let additionSeparator = obj.additionSeparator || "";
  let complexAddition = addition || "";
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    complexAddition += `${additionSeparator}${addition}`;
  }

  let newStr = `${str}${complexAddition}`;
  let separator = obj.separator || "+";
  let repeatTimes = obj.repeatTimes || 1;
  for (let j = 0; j < repeatTimes - 1; j++) {
    newStr += `${separator}${str}${
      complexAddition ? complexAddition : addition
    }`;
  }

  return newStr;
};
