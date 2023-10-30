const num = [1, 2, 3, 4, 5, 6, 7, 8];
let Sum = 0;
let Count = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) { 
        Sum += num[i];
        Count++;
    }
}

let average = Sum / Count;


console.log("Average of even numbers:", average);
