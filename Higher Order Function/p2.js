let input = [2, 3, 4, 6, 7];
let output = [];

for (let i = 0; i < input.length; i++) {
  let result = 1;
  for (let j = 0; j < 5; j++) {
    result *= input[i];
  }
  output.push(result);
}

console.log(output);