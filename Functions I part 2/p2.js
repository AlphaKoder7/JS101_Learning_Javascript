function findDifference(a, b) {
  return a - b;
}

function findAbsoluteValue(number) {
  if (number < 0) {
    return -number;
  }
  return number;
}

function findAbsoluteDifference(a, b) {
  let difference = findDifference(a, b);
  return findAbsoluteValue(difference);
}

let input1 = [12, 4];
let output1 = findAbsoluteDifference(input1[0], input1[1]);
console.log(output1); 

let input2 = [4, 18];
let output2 = findAbsoluteDifference(input2[0], input2[1]);
console.log(output2);