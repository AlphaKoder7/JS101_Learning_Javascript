function isOdd(number) {
  return number % 2 !== 0;
}

function printOddNumbersUpTo(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isOdd(i)) {
      console.log(i);
    }
  }
}

let limit = 20;
printOddNumbersUpTo(limit);
