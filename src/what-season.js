const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  let checkClass = (data) => ({}.toString.call(data).slice(8, -1));
  if (checkClass(date) !== "Date") throw new Error();

  let month = date.getMonth();
  season = "";
  switch (month) {
    case 11:
    case 0:
    case 1:
      season = "winter";
      break;
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    case 8:
    case 9:
    case 10:
      season = "fall";
      break;
  }
  return season;
};
