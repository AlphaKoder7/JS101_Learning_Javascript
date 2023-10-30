function customSlice(arr, start, end) {

  if (!Array.isArray(arr)) {
      return [];
  }

  const length = arr.length;
  let startIndex = start;
  let endIndex = end;

  if (startIndex === undefined) {
      startIndex = 0;
  } else if (startIndex < 0) {
      startIndex = Math.max(0, length + startIndex);
  } else {
      startIndex = Math.min(length, startIndex);
  }

  if (endIndex === undefined) {
      endIndex = length;
  } else if (endIndex < 0) {
      endIndex = Math.max(0, length + endIndex);
  } else {
      endIndex = Math.min(length, endIndex);
  }

  const slicedArray = [];
  for (let i = startIndex; i < endIndex; i++) {
      slicedArray.push(arr[i]);
  }

  return slicedArray;
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(customSlice(animals, 2));
console.log(customSlice(animals, 2, 4));
console.log(customSlice(animals, 1, 5));
console.log(customSlice(animals, -2));
console.log(customSlice(animals, 2, -1));
console.log(customSlice(animals));
