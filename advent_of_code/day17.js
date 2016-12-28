/*
generate the shortest path

passcode is the input + the path to your current position, udlr

First 4 characters represent up, down, left, and right and any letters = open or closed
b, c, d, e, or f === open
a or any number === closed

// build out the matrix

// recurse to the final position, add each path to a storage
// find the shortest path
*/

// const generateMap = (rows, cols) => {
//   let matrix = [];
//   for (let i = 0; i < (rows * 2) + 1; i++) {
//     let row = [];
//     if (i === 0 || i === (rows * 2)) {
//       for (let j = 0; j < (rows * 2) + 1; j++) {
//         row.push('#');
//       }
//     } else if (i % 2 === 0) {
//       for (let j = 0; j < (rows * 2) + 1; j++) {
//         if (j === 0 || j === (rows * 2) + 1 || j % 2 === 0) {
//           row.push('#')
//         } else {
//           row.push('-')
//         }
//       }
//     } else {
//       for (let j = 0; j < (rows * 2) + 1; j++) {
//         if (j === 0 || j === (rows * 2)) {
//           row.push('#')
//         } else if (j % 2 === 0) {
//           row.push('|')
//         } else {
//           row.push('0')
//         }
//       }
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }
const input ='qtetzkpl';
const md5 = require('blueimp-md5')

const generateMap = (row, col) => {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j < col; j++) {
      row.push('O');
    }
    matrix.push(row);
  }
  return matrix;
}
const generateFourCharHash = (input, path) => {
  return md5(input + path).slice(0, 4);
}
const confirmDoor = (char) => {
  // console.log(char.search(/b-f/))
  if (char.search(/[b-f]/) > -1) {
    return true;
  } 
  return false;
}

let storage = {};
let max = -Infinity;
let shortestPath = '';

const findPath = (currentRow, currentCol, currentPath, goalRow, goalCol, matrix, input) => {
  if (!matrix[currentRow] || !matrix[currentRow][currentCol]) {
    // console.log(matrix[currentRow][currentRow], 'position')
    return;
  }
  if (currentRow === goalRow && currentCol === goalCol) {
    storage[currentPath] = currentPath.length;
    if (currentPath.length > max) {
      max = currentPath.length;
      shortestPath = currentPath;
    }
    return;
  }
  let doors = generateFourCharHash(input, currentPath);
  let up = confirmDoor(doors[0]);
  let down = confirmDoor(doors[1]);
  let left = confirmDoor(doors[2]);
  let right = confirmDoor(doors[3]);

  if (up) {
    findPath(currentRow - 1, currentCol, currentPath + 'U', goalRow, goalCol, matrix, input);
  }
  if (down) {
    findPath(currentRow + 1, currentCol, currentPath + 'D', goalRow, goalCol, matrix, input);
  }
  if (left) {
    findPath(currentRow, currentCol - 1, currentPath + 'L', goalRow, goalCol, matrix, input);
  }
  if (right) {
    findPath(currentRow, currentCol + 1, currentPath + 'R', goalRow, goalCol, matrix, input);
  }
}

let map = generateMap(4, 4);
findPath(0, 0, '', 3, 3, map, input);
// console.log(storage, 'storage')
console.log(shortestPath, 'shortestPath')
console.log(max, 'max path length')