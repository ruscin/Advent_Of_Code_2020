const fs = require("fs");
const input = fs.readFileSync("./ex3.txt", "utf-8").split("\r\n");
const repeatedInput = [];
const moveRight = 3;
let treeCounter = 0;
const treeCounter2 = [];

const slopePath = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 },
];

input.forEach((el) => repeatedInput.push(el.repeat(100))); // 75 should be enough for this exercise, because 7 * 323 / 31 == 72

for (let i = 0; i < repeatedInput.length; i++) {
  const horizontalAxis = [...repeatedInput[i]][moveRight * i];
  
  if (horizontalAxis === "#") {
    treeCounter++;
  }
}

// PART 2
let helperCounter = 0;

for (let i = 0; i < slopePath.length; i++) {
  for (let j = 0; j < repeatedInput.length; j++) {
    const horizontalAxis =
      j % slopePath[i].y === 0
        ? [...repeatedInput[j]][slopePath[i].x * j]
        : null;

    if (horizontalAxis === "#") {
      helperCounter++;
    }
  }

  treeCounter2[i] = helperCounter;
  helperCounter = 0;
}

const finalResult = treeCounter2.reduce((acc, val) => acc * val, 1);

console.log(treeCounter);
console.log(treeCounter2);
console.log(finalResult);
