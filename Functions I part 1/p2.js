function checkPrime(num) {
  if (num <= 1) {
      return false;
  } else if (num <= 3) {
      return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
      return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;
      }
  }
  return true;
}

function printPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
      if (checkPrime(i)) {
          console.log(i, "is prime");
      }
  }
}

let limit = 30;
printPrimes(limit);
