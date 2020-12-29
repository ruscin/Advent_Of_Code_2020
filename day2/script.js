const fs = require("fs");
const input = fs.readFileSync("./ex2.txt", "utf-8").split("\r\n");
// const input = [
//     "1-3 a: abcde",
// "1-3 b: cdefg",
// '2-9 c: ccccccccc'
// ]

let counter = 0;
let counter2 = 1

for (let i = 0; i < input.length; i++) {
  const splitedInput = input[i].split(" ");
  const [min, max] = splitedInput[0].split("-");
  const letter = splitedInput[1].charAt(0);
  const password = splitedInput[2];
  const passwordArray = [...password]

  const howManyTimesThereIsLetter = 
  passwordArray.filter((el) => el === letter).length;

  if (howManyTimesThereIsLetter >= min && howManyTimesThereIsLetter <= max) 
  {
    counter++;
  }

  //PART 2

  if ((passwordArray[min-1] === letter && passwordArray[max-1] !== letter) 
  || (passwordArray[min-1] !== letter && passwordArray[max-1] === letter) 
  && passwordArray[min-1] !== passwordArray[max-1])
  {
      counter2++
  }
}

console.log(counter);
console.log(counter2);







