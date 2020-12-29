const fs = require("fs");
const input = fs.readFileSync("./ex1.txt", "utf-8").split("\r\n").map(Number);

let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i+1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      result = input[i] * input[j];
      break;
    }
  }
}

console.log(result);

// PART 2

let result2 = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i+1; j < input.length; j++) {
    for (let k = j+1; k < input.length; k++) {
      if (input[i] + input[j] + input[k] === 2020) {
        result2 = input[i] * input[j] * input[k];
        break;
      }
    }
  }
}

console.log(result2);

// find number => try every number with it => if not found go to next number
