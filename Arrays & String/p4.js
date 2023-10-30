const inputString = "This is a sample string for counting words";
const words = inputString.split(/\s+/);
const wordCount = words.length;

console.log(`The number of words in the string is: ${wordCount}`);