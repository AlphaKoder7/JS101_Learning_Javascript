function toSwapCase(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (str[i] === lower[j]) {
        result += upper[j];
      } else if (str[i] === upper[j]) {
        result += lower[j];
      }
    }
  }
  return result;
}

let str = "Test";
let strModified = toSwapCase(str);
console.log(strModified);
