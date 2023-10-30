function customSubstring(str, startIndex, endIndex) {
  if (startIndex === undefined) {
      startIndex = 0;
  }

  if (endIndex === undefined) {
      endIndex = str.length;
  }

  if (startIndex > endIndex) {
      const temp = startIndex;
      startIndex = endIndex;
      endIndex = temp;
  }

  startIndex = Math.max(startIndex, 0);
  endIndex = Math.min(endIndex, str.length);

  if (startIndex < 0) {
      startIndex = 0;
  }

  if (endIndex < 0) {
      endIndex = 0;
  }

  return str.slice(startIndex, endIndex);
}

const str = 'Mozilla';

console.log(customSubstring(str, 1, 3));
console.log(customSubstring(str, 2));
