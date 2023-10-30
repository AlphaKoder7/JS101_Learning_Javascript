function check_prime(num)
{
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

for(let i = 1; i <= 10; i++)
  {
    let result = check_prime(i)

    if(result == true)
    {
      console.log(i,"is prime")
    }
    else
    {
      console.log(i,"is not prime")
    }
  }