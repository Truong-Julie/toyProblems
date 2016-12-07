// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.
// let arr1 = [6, 7, 10, 25, 30, 63, 64];
let arr1 = [7, 10, 25, 30, 63, 64];
let arr2 = [-1, 4, 5, 6, 7, 8, 50];
let arr3 = [1, 6, 10, 14];

const incrementIfNeeded = (array, index, currentNum) => {
  while (array[index] < currentNum) {
    index++;
  }
  if (array[index] <= currentNum) {
    return index;
  }
  return index - 1; 
}

const findSmallest = (arr1, arr2, arr3) => {
  let pointer1 = 0;
  let pointer2 = 0; 
  let pointer3 = 0;

  let currentMaxNumber;
  let found = false;

  while (!found && arr1[pointer1] && arr2[pointer2] && arr3[pointer3]) {

    if (arr1[pointer1] > arr2[pointer2] && arr1[pointer1] > arr3[pointer3]) {
      currentMaxNumber = arr1[pointer1];
      pointer2 = incrementIfNeeded(arr2, pointer2, currentMaxNumber)
      pointer3 = incrementIfNeeded(arr3, pointer3, currentMaxNumber)
      if (currentMaxNumber === arr2[pointer2] && currentMaxNumber === arr3[pointer3]) {
        found = true;
      } else {
        pointer1++;
      }
    } else if (arr2[pointer2] > arr1[pointer1] && arr2[pointer2] > arr3[pointer3]) {
      currentMaxNumber = arr2[pointer2];
      pointer1 = incrementIfNeeded(arr1, pointer1, currentMaxNumber)
      pointer3 = incrementIfNeeded(arr3, pointer3, currentMaxNumber)
      if (currentMaxNumber === arr1[pointer1] && currentMaxNumber === arr3[pointer3]) {
        found = true;
      } else {
        pointer2++;
      }
    } else {
      currentMaxNumber = arr3[pointer3];
      pointer1 = incrementIfNeeded(arr1, pointer1, currentMaxNumber)
      pointer2 = incrementIfNeeded(arr2, pointer2, currentMaxNumber)
      if (currentMaxNumber === arr1[pointer1] && currentMaxNumber === arr2[pointer2]) {
        found = true;
      } else {
        pointer3++;
      }
    }
  }

  if (found) {
    return currentMaxNumber;
  } else {
    return null;
  }
}

console.log(findSmallest(arr1, arr2, arr3));

// declare found
// iterate through the arrays separately, 
  // make sure you don't reach the end of any array
  // while there pointers 

  // start with the first index of all arrays
  // find the max
  // while the not end of array variable that will keep track of end of array and or found