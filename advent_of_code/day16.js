/*
Input: 11011110011011101
Generate a list at least the disk amount
cut to the disk amount

// collapse pairs
// if even length
  // repeat collapsing pairs
*/

/*
Call the data you have at this point "a".
Make a copy of "a"; call this copy "b".
Reverse the order of the characters in "b".
In "b", replace all instances of 0 with 1 and all 1s with 0.
The resulting data is "a", then a single 0, then "b".
*/

const switchBinary = (binary) => {
  if (binary === '1') {
    return '0'
  }
  return '1';
}
const swap = (index1, index2, array, iteratee) => {
  iteratee = iteratee ? iteratee : i => i;
  let temp = iteratee(array[index1]);
  array[index1] = iteratee(array[index2]);
  array[index2] = temp;
}
const reverse = (str, iteratee) => {
  let array = str.split('');
  let start = 0;
  let end = array.length - 1;
  while (end >= start) {
    swap(start, end, array, iteratee);
    start += 1;
    end -= 1;
  }
  return array.join('');
}
const generateA0B = (a, iteratee) => {
  let b = reverse(a, iteratee);
  return a + '0' + b;
}
const collapse = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    if (str[i] === str[i + 1]) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

const input = '11011110011011101';
const diskSpace = 35651584;
let filledDiskCode = input;

while (filledDiskCode.length < diskSpace) {
  filledDiskCode = generateA0B(filledDiskCode, switchBinary);
}
let collapsedCode = filledDiskCode.slice(0, diskSpace);
while(collapsedCode.length % 2 === 0) {
  collapsedCode = collapse(collapsedCode); 
}
console.log(collapsedCode);

'00011010100010010'

// let testing = generateA0B('111100001010', switchBinary);
// console.log(testing === '1111000010100101011110000', 'test');