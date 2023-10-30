function customIncludes(arr, searchElement, fromIndex) {
  if (fromIndex === undefined || isNaN(fromIndex) || fromIndex < 0) {
      fromIndex = 0;
  }

  for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i] === searchElement) {
          return true;
      }
  }

  return false;
}

const array1 = [1, 2, 3];
console.log(customIncludes(array1, 2));
const pets = ['cat', 'dog', 'bat'];
console.log(customIncludes(pets, 'cat'));
console.log(customIncludes(pets, 'at'));
