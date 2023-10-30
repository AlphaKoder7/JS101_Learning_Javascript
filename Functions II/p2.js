function customLastIndex(arr, searchElement, fromIndex) {

  if (fromIndex === undefined || isNaN(fromIndex) || fromIndex >= arr.length) {
      fromIndex = arr.length - 1;
  }

  if (fromIndex < 0) {
      fromIndex = arr.length + fromIndex;
      if (fromIndex < 0) {
          fromIndex = 0;
      }
  }

  for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === searchElement) {
          return i;
      }
  }

  return -1; 
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(customLastIndex(animals, 'elephant')); 
console.log(customLastIndex(animals, 'Tiger')); 
