const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let secretName = "";
  let noWhiteSpaceArr = arr.map((name) => {
    if (typeof name != "string") return;
    return name.trim().toUpperCase();
  });

  let newArr = noWhiteSpaceArr.sort();
  newArr.forEach((name) => {
    if (typeof name === "string") {
      secretName += name[0];
    }
  });
  return secretName;
};
