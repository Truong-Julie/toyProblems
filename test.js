// (function afunction(args) {
// var x = 0;
// if (true) {
//           var x = 1;
//           console.log(x);
// }
// console.log(x);
// })();

const wordLen = (word) => {
  if (word === '') {
    return 0;
  }
  return 1 + wordLen(word.slice(1));
}

console.log(wordLen('booger'))