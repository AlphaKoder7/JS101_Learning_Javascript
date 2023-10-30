function checkCase(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      return "uppercase";
    } else if (char >= 'a' && char <= 'z') {
      return "lowercase";
    }
  }
  return "neither";
}

let str = "arnold"; 
console.log(checkCase(str));

