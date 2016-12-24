/*
Ascending Order

Write a program to sort a stack in ascending order (with biggest items on top). 
You may use at most one additional stack to hold items, but you may not copy 
the elements into any other data structure (such as an array). The stack 
supports the following operations: push, pop, peek, and isEmpty.

*/

let unorderArray = [2, 9, 10, 3, 7, 4, 1];
let withDupunorderArray = [2, 9, 2, 2, 10, 3, 7, 4, 1];

let arrayCompare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

let stackSort = (arr1) => {
  let arr2 = [];
  while (arr1.length > 0) {
    if (arr2.length === 0 || arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr2.push(arr1.pop());
    } else if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
      arr2.push(arr1.pop());
    } else {
      let currentElement = arr1.pop();
      while (currentElement < arr2[arr2.length - 1]) {
        arr1.push(arr2.pop());
      }
      arr1.push(currentElement);
    }
  }
  while (arr2.length > 0) {
    arr1.push(arr2.pop());
  }
  return arr1;
};

// let index = arr1.length - 1;
// index = arr1.length - 1;

// let index = arr1.length - 1;
// arr2.push(currentElement);

// while (arr1.length > 0) {
//   currentElement = arr1.pop();
//   // push and pop back and forth
//   if (currentElement < arr2[arr2.length - 1]) {

//   }


// }
console.log(stackSort(withDupunorderArray), 'array');
console.assert(Array.isArray(stackSort(unorderArray)) === true, 'should return an array');
console.assert(stackSort(unorderArray).length === 7, 'should return an array with length of 7');
console.assert(arrayCompare(stackSort(unorderArray), [10, 9, 7, 4, 3, 2, 1]) === true, 'should return ascending sorted array');
console.assert(arrayCompare(stackSort(withDupunorderArray), [10, 9, 7, 4, 3, 2, 2, 2, 1]) === true, 'should return ascending sorted array');
