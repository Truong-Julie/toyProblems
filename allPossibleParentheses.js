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
    if (currentString.length === 2 * n) {
      if (remainingOpenBraces === 0 && remainingCloseBraces === 0) {
        return results.push(currentString);
      } else {
        return;
      }
    }
    generatePossibleParentheses(currentString + '{', remainingOpenBraces - 1, remainingCloseBraces + 1);
    generatePossibleParentheses(currentString + '}', remainingOpenBraces, remainingCloseBraces - 1);
  }
  generatePossibleParentheses('', n, 0);
  return results;
}

console.log(allPossibleParentheses(5));