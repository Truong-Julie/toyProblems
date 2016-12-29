const sameArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left[0]);
      left = left.slice(1);
    } else {
      result.push(right[0]);
      right = right.slice(1);
    }
  }
  if (left.length) {
    return result.concat(left);
  }
  if (right.length) {
    return result.concat(right);
  }
}
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor((arr.length)/2);
  let left = arr.slice(0, middle)
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const testArray1 = [9, 3, 4, 5, 7, 2, 1, 0, 0]
const testArray2 = [19, 100, 4, 5, 200]
const testArray3 = [100, 300, 500, 200]
const testArray4 = [-100, -300, -500, -200]
const sortedTestArray1 = mergeSort(testArray1)
const sortedTestArray2 = mergeSort(testArray2)
const sortedTestArray3 = mergeSort(testArray3)
const sortedTestArray4 = mergeSort(testArray4)

console.log(sameArray(sortedTestArray1, [0, 0, 1, 2, 3, 4, 5, 7, 9]),'testArray1')
console.log(sameArray(sortedTestArray2, [4, 5, 19, 100, 200]),'testArray2')
console.log(sameArray(sortedTestArray3, [100, 200, 300, 500]),'testArray3')
console.log(sameArray(sortedTestArray4, [-100, -200, -300, -500].reverse()),'testArray4')


// console.log(sameArray([1, 2, 3], [1, 2, 3]))
// console.log(sameArray([1, 2, 3], [1, 2, 4]))