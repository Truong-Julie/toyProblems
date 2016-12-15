// Print all parentheses combinations for a given value 'n' such that they are balanced.

const allPossibleParentheses = (n) => {
  if (n === 0) {
    return;
  }
  let results = [];
  const generatePossibleParentheses = (currentString, remainingOpenBraces, remainingCloseBraces) => {
    if (remainingCloseBraces === -1) {
      return;
    }
    if (remainingOpenBraces === 0) {
      for (let i = 0; i < remainingCloseBraces; i++) {
        currentString += '}';
      }
      return results.push(currentString);
    }
    generatePossibleParentheses(currentString + '{', remainingOpenBraces - 1, remainingCloseBraces + 1);
    generatePossibleParentheses(currentString + '}', remainingOpenBraces, remainingCloseBraces - 1);
  }
  generatePossibleParentheses('', n, 0);
  return results;
}
// console.log(allPossibleParentheses(3));

// let print_all_parentheses_rec = function(n, left_count, right_count, output) {

//   if (left_count >= n && right_count >= n) {
//     console.log(output);
//   }

//   if (left_count < n) {
//     output.push('{');
//     print_all_parentheses_rec(n, left_count + 1, right_count, output);
//     output.pop();
//   }
//   if (right_count < left_count) {
//     output.push('}');
//     print_all_parentheses_rec(n, left_count, right_count + 1, output);
//     output.pop();
//   }
// };

// let print_all_parentheses = function(n) {
//   let output = [];
//   print_all_parentheses_rec(n, 0, 0, output);
//   return output;
// };

// console.log(print_all_parentheses(3))