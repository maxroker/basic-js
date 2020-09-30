const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = 2 ** disksNumber - 1;
  let s = Math.floor((t / turnsSpeed) * 60 * 60);
  const obj = { turns: t, seconds: s };
  return obj;
};
