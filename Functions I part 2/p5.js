function charToLower(char) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < uppercase.length; i++) {
    if (char === uppercase[i]) {
      return lowercase[i];
    }
  }

  return char;
}

function wordToLower(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    result += charToLower(word[i]);
  }
  return result;
}

function arrayToLower(strings) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(wordToLower(strings[i]));
  }
  return result;
}

let inputArray = ["MA", "SA", "I", "SCH", "OOL"];
let outputArray = arrayToLower(inputArray);
console.log(outputArray);
