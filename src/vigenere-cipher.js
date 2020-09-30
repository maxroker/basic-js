const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = true) {
    this.machine = machine;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("THROWN");
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    this.machine ? message : (message = message.split("").reverse().join(""));

    key = key.toUpperCase();
    let n = key.length;

    let counter = 0;
    let newMessage = "";
    while (counter < message.length) {
      for (let i = 0; i < n; i++) {
        if (counter >= message.length) break;
        if (alphabet.indexOf(message[counter]) < 0) {
          newMessage += message[counter];
          i = i - 1;
        } else {
          newMessage +=
            alphabet[
              (alphabet.indexOf(message[counter]) + alphabet.indexOf(key[i])) %
                26
            ];
        }
        counter += 1;
      }
    }
    return newMessage;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("THROWN");
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    this.machine ? message : (message = message.split("").reverse().join(""));
    key = key.toUpperCase();
    let n = key.length;

    let counter = 0;
    let newMessage = "";
    while (counter < message.length) {
      for (let i = 0; i < n; i++) {
        if (counter >= message.length) break;
        if (alphabet.indexOf(message[counter]) < 0) {
          newMessage += message[counter];
          i = i - 1;
        } else {
          newMessage +=
            alphabet[
              (alphabet.indexOf(message[counter]) -
                alphabet.indexOf(key[i]) +
                26) %
                26
            ];
        }
        counter += 1;
      }
    }
    return newMessage;
  }
}

module.exports = VigenereCipheringMachine;
