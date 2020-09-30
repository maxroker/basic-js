const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(data) {
  if (typeof data != "string" || data <= 0 || data >= 15 || !parseInt(data)) {
    return false;
  } else {
    return Math.log(15 / data) / (0.693 / 5730);
  }
};
