let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let oddIndexedElements = arr.filter((element, index) => index % 2 !== 0);

let sum = oddIndexedElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let average = sum / oddIndexedElements.length;

console.log("Average of elements at odd index:", average);
