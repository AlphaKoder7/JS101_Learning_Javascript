function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function calculateAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = findSum(array);
  return sum / array.length;
}

let numbers = [10, 20, 30, 40, 50];
let average = calculateAverage(numbers);
console.log("Average:", average);
