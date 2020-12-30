const fs = require("fs");
const input = fs.readFileSync("./ex3.txt", "utf-8").split("\r\n");
const repetedInput = [];
const moveRight = 3;
const treeCounter = 0
input.forEach((el) => repetedInput.push(el.repeat(1200)));

for (let i = 0; i < repetedInput.length; i++) {
  const aaa = [...repetedInput[i]][moveRight * i ]
  if (aaa === "#"){
    treeCounter++
  }
}

console.log(treeCounter)
