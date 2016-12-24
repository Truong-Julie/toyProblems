// given a 2n matrix, return the max of a n matrix by rotating around the matrix

let testMartix1 = 
[ [ '112', '42', '83', '119' ],
  [ '56', '125', '56', '49' ],
  [ '15', '78', '101', '43' ],
  [ '62', '98', '114', '108' ] ]
let n1 = 2;


const rotateMatrixMax = (matrix, n) => {
  let max = 0;

  let leftCol = 0;
  let rightCol = 2 * n - 1;

  let topRow = 0;
  let bottomRow = 2 * n - 1;

  let topLeft = [topRow, leftCol];
  let topRight = [topRow, rightCol];

  let bottomLeft = [bottomRow, leftCol];
  let bottomRight = [bottomRow, rightCol];

  while (topRow < n) {
    topLeft = [topRow, leftCol];
    topRight = [topRow, rightCol];
    bottomLeft = [bottomRow, leftCol];
    bottomRight = [bottomRow, rightCol];

    max += Math.max(
      matrix[topLeft[0]][topLeft[1]], 
      matrix[bottomLeft[0]][bottomLeft[1]],
      matrix[topRight[0]][topRight[1]],
      matrix[bottomRight[0]][bottomRight[1]]
    );
    if (leftCol < n - 1) {
      leftCol += 1;
      rightCol -= 1;
    } else {
      leftCol = 0;
      rightCol = 2 * n - 1;
      topRow += 1;
      bottomRow -= 1;
    }
  } 
  return max;
}


var processData = function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var queries = input[0];
    var result = '';
    var i = 1;

    while ( i < input.length - 1) {
        var n = input[i];
        var twoN = n * 2;
        var matrix = [];
        var index = i + 1
        while (index < twoN + 2) {
            matrix.push(input[index].split(' '));
            index++;
        }
        i = twoN + 1; 
        console.log(rotateMatrixMax(matrix, n)) 
    }  
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var queries = input[0];
    var result = '';
    var i = 1;
    while ( i < input.length) {
        var n = input[i];
        var endOfMatrix = 2 * n + i + 1;
        var matrix = [];
        var index = i + 1
        while (index < endOfMatrix) {
           matrix.push(input[index].split(' '));
           index++;
           i++;
        } 
        console.log(rotateMatrixMax(matrix, n));
        i++;
    }  
} 

const rotateMatrixMax = (matrix, n) => {
  let max = 0;

  let leftCol = 0;
  let rightCol = 2 * n - 1;

  let topRow = 0;
  let bottomRow = 2 * n - 1;

  let topLeft = [topRow, leftCol];
  let topRight = [topRow, rightCol];

  let bottomLeft = [bottomRow, leftCol];
  let bottomRight = [bottomRow, rightCol];

  while (topRow < n) {
    topLeft = [topRow, leftCol];
    topRight = [topRow, rightCol];
    bottomLeft = [bottomRow, leftCol];
    bottomRight = [bottomRow, rightCol];

    max += Math.max(
      matrix[topLeft[0]][topLeft[1]], 
      matrix[bottomLeft[0]][bottomLeft[1]],
      matrix[topRight[0]][topRight[1]],
      matrix[bottomRight[0]][bottomRight[1]]
    );
    if (leftCol < n - 1) {
      leftCol += 1;
      rightCol -= 1;
    } else {
      leftCol = 0;
      rightCol = 2 * n - 1;
      topRow += 1;
      bottomRow -= 1;
    }
  } 
  return max;
}

// console.log(topLeft,'topLeft', 'max',Math.max(
//   matrix[topLeft[0]][topLeft[1]], 
//   matrix[bottomLeft[0]][bottomLeft[1]],
//   matrix[topRight[0]][topRight[1]],
//   matrix[bottomRight[0]][bottomRight[1]]
// ))
