/*
--- Day 8: Two-Factor Authentication ---

You come across a door implementing what you can only assume is an implementation of two-factor authentication after a long game of requirements telephone.

To get past the door, you first swipe a keycard (no problem; there was one on a nearby desk). Then, it displays a code on a little screen, and you type that code on a keypad. Then, presumably, the door unlocks.

Unfortunately, the screen has been smashed. After a few minutes, you've taken everything apart and figured out how it works. Now you just have to work out what the screen would have displayed.

The magnetic strip on the card you swiped encodes a series of instructions for the screen; these instructions are your puzzle input. The screen is 50 pixels wide and 6 pixels tall, all of which start off, and is capable of three somewhat peculiar operations:

rect AxB turns on all of the pixels in a rectangle at the top-left of the screen which is A wide and B tall.
rotate row y=A by B shifts all of the pixels in row A (0 is the top row) right by B pixels. Pixels that would fall off the right end appear at the left end of the row.
rotate column x=A by B shifts all of the pixels in column A (0 is the left column) down by B pixels. Pixels that would fall off the bottom appear at the top of the column.
For example, here is a simple sequence on a smaller screen:

rect 3x2 creates a small rectangle in the top-left corner:

###....
###....
.......
rotate column x=1 by 1 rotates the second column down by one pixel:

#.#....
###....
.#.....
rotate row y=0 by 4 rotates the top row right by four pixels:

....#.#
###....
.#.....
rotate column x=1 by 1 again rotates the second column down by one pixel, causing the bottom pixel to wrap back to the top:

.#..#.#
#.#....
.#.....
As you can see, this display technology is extremely powerful, and will soon dominate the tiny-code-displaying-screen market. That's what the advertisement on the back of the display tries to convince you, anyway.

There seems to be an intermediate check of the voltage used by the display: after you swipe your card, if the screen did work, how many pixels should be lit?

*/

// Create a function that generates the matrix

// Create a rect function, create a A x B rectange
// Given a matrix, turn all squares within the A X B on 

// Create rotate Row
// Given the matrix, row and rotations will rotate the arrary
// rotate row=A by B
// rotate row y=5 by 20

// Create rotate Col
// Given the matrix, rotate the given column by the given amounts

// Create countLights function



class SecurityScreen {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.generateMatrix(width, height);
  }

  generateMatrix (width, height) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
      let currentRow = [];
      for (let j = 0; j < width; j++) {
        currentRow.push('.');
      }
      matrix.push(currentRow);
    }
    return matrix;
  }

  highlightAxB (row, col) {
    for (let b = 0; b < row; b++) {
      for (let a = 0; a < col; a++) {
        this.matrix[b][a] = '0';
      }
    }
    // console.log(this.matrix.join('\n'), 'current state of the matrix')
    return this.matrix;
  }

  reverseRowInPlace (start, end, array) {
    let currentStart = +start;
    let currentEnd = +end;
    let result = array.slice();
    while (currentStart < currentEnd) {
      let temp = result[currentStart];
      result[currentStart] = result[currentEnd];
      result[currentEnd] = temp;
      currentStart += 1;
      currentEnd -= 1
    }
    return result;
  }

  rotateRow (row, rotations) {
    let currentRow = this.matrix[row];
    currentRow = this.reverseRowInPlace(0, currentRow.length - 1, currentRow);
    currentRow = this.reverseRowInPlace(rotations, currentRow.length - 1, currentRow);
    currentRow = this.reverseRowInPlace(0, rotations - 1, currentRow);
    this.matrix[row] = currentRow;
    return this.matrix[row];
  }

  rotateCol (col, rotations) {
    let rotatedCol = [];
    for (let i = 0; i < this.matrix.length; i++) {
      rotatedCol.push(this.matrix[i][col]);
    }
    rotatedCol = this.reverseRowInPlace(0, rotatedCol.length - 1, rotatedCol);
    rotatedCol = this.reverseRowInPlace(rotations, rotatedCol.length - 1, rotatedCol);
    rotatedCol = this.reverseRowInPlace(0, rotations - 1, rotatedCol);
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i][col] = rotatedCol[i];
    }
    return this.matrix;
  }

  countLights () {
    let totalLightsOn = 0;
    for (let row = 0; row < this.matrix.length; row++ ) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        if (this.matrix[row][col] === 'x') {
          totalLightsOn += 1;
        }
      }
    }
    return totalLightsOn;
  }
}

// matrix[y][x]

// let test = new SecurityScreen(5, 5)
// test.highlightAxB(2, 2)
// // test.rotateRow(1, 2)
// test.rotateCol(1, 1)
// // console.log(, 'highlightAxB')
// // console.log(, 'rotateRow')
// console.log(test.matrix, 'After Rotation')
// console.log(test.countLights(), 'Counting lights')
// console.log(test.reverseInPlace(2, 4, [1, 2, 3, 4, 5]), '[1, 2, 5, 4, 3]')
// Create a parser that delgates which function to use

// 1.2....
// ###....
// .#.....
// rotate row y=0 by 4 rotates the top row right by four pixels:

// ...2.1.
// ###....
// .#.....

const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, '/inputs_adventOfCode/twoFactorAuth_inputs.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err);
  }
  let input = data.split('\n');
  let currentRow = 0;

  let screen = new SecurityScreen(50, 6)
  // let screen = new SecurityScreen(7, 3)
  input.forEach(instructions => {
    currentRow += 1;
    // rotate row
    // rotate row y=0 by 6
    if (instructions.indexOf('rotate row y=') > -1) {
      let coordinates = instructions.split('rotate row y=')[1].split(' by ');
      screen.rotateRow(coordinates[0], coordinates[1]);
      // console.log(currentRow, screen.countLights())
    }
    // rotate col
    // rotate column x=0 by 1
    if (instructions.indexOf('rotate column x=') > -1) {
      let coordinates = instructions.split('rotate column x=')[1].split(' by ');
      screen.rotateCol(coordinates[0], coordinates[1]);
      // console.log(currentRow, screen.countLights())
    }
    // rect  
    // rect 3x1
    if (instructions.indexOf('rect') > -1) {
      let coordinates = instructions.split('rect ')[1].split('x');
      screen.highlightAxB(coordinates[1], coordinates[0])
      // console.log(currentRow, screen.countLights())
    }
    // console.log(screen.matrix.join('\n'))
    // console.log(currentRow, 'Instructions', instructions)
    // console.log('Total lights on:', screen.countLights())
  })
  console.log(screen.matrix.join('\n'))
  console.log('FINAL --- Total lights on:', screen.countLights())
});

