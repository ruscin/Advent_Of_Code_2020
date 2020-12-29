const fs = require("fs");
const input = fs.readFileSync("./ex2.txt", "utf-8").split("\r\n");

let counter = 0;
let counter2 = 0;

for (let i = 0; i < input.length; i++) {
  const splitedInput = input[i].split(" ");
  const [min, max] = splitedInput[0].split("-");
  const letter = splitedInput[1].charAt(0);
  const password = splitedInput[2];
  const passwordArray = [...password];

  const letterOccurences = passwordArray.filter((el) => el === letter).length;

  if (letterOccurences >= min && letterOccurences <= max) {
    counter++;
  }

  //PART 2
  const minLetter = passwordArray[min - 1];
  const maxLetter = passwordArray[max - 1];

  if (
    (minLetter === letter && maxLetter !== letter) ||
    (minLetter !== letter && maxLetter === letter)
  ) {
    counter2++;
  }
}

console.log(counter);
console.log(counter2);
