/*
--- Day 13: A Maze of Twisty Little Cubicles ---

You arrive at the first floor of this new building to discover a much less welcoming environment than the shiny atrium of the last one. Instead, you are in a maze of twisty little cubicles, all alike.

Every location in this area is addressed by a pair of non-negative integers (x,y). Each such coordinate is either a wall or an open space. You can't move diagonally. The cube maze starts at 0,0 and seems to extend infinitely toward positive x and y; negative values are invalid, as they represent a location outside the building. You are in a small waiting area at 1,1.

While it seems chaotic, a nearby morale-boosting poster explains, the layout is actually quite logical. You can determine whether a given x,y coordinate will be a wall or an open space using a simple system:

Find x*x + 3*x + 2*x*y + y + y*y.
Add the office designer's favorite number (your puzzle input).
Find the binary representation of that sum; count the number of bits that are 1.
If the number of bits that are 1 is even, it's an open space.
If the number of bits that are 1 is odd, it's a wall.
For example, if the office designer's favorite number were 10, drawing walls as # and open spaces as ., the corner of the building containing 0,0 would look like this:

  0123456789
0 .#.####.##
1 ..#..#...#
2 #....##...
3 ###.#.###.
4 .##..#..#.
5 ..##....#.
6 #...##.###
Now, suppose you wanted to reach 7,4. The shortest route you could take is marked as O:

  0123456789
0 .#.####.##
1 .O#..#...#
2 #OOO.##...
3 ###O#.###.
4 .##OO#OO#.
5 ..##OOO.#.
6 #...##.###
Thus, reaching 7,4 would take a minimum of 11 steps (starting from your current location, 1,1).

What is the fewest number of steps required for you to reach 31,39?

Your puzzle input is 1350.
*/
const isWall = (x, y, favoriteNum) => {
  x = +x;
  y = +y;
  let num = ((x * x) + (3 * x) + (2 * x * y) + y + (y * y)) + favoriteNum;
  // console.log('x:', x, 'y:', y, 'num: ', num, 'count of ones:', (num.toString(2).match(/1/g) || []).length, (num.toString(2).match(/1/g) || []).length % 2 !== 0, num.toString(2))
  let countOfOnes = (num.toString(2).match(/1/g) || []).length;
  if (countOfOnes % 2 !== 0) {
    return true;
  }
  return false;
}

// console.log(isWall(2, 0))
// console.log(isWall(0, 2))
// console.log(isWall(0, 3))
// console.log(isWall(7, 4))
// console.log(isWall(6, 9))
// console.log(isWall(1, 1))

// build the matrix
class Maze {
  constructor(n, favoriteNum) {
    this.maze = this.constructMaze(n, favoriteNum);
  }

  constructMaze (n, favoriteNum) {
    let maze = [];
    for (let row = 0; row < n; row++) {
      maze.push([]); 
      for (let col = 0; col < n; col++) {
        if (isWall(col, row, favoriteNum)) {
          maze[row].push('#');
        } else if ( col === 31 && row === 39) {
          maze[row].push('X');
        } else {
          maze[row].push('.');
        }
      }
    }
    return maze;
  }
}

let myMaze = new Maze(200, 1350);

const mazePaths = (matrix, finalRow, finalCol) => {
  let solutions = {};
  // let solutions = [];
  // let min = Infinity;
  let paths = 0;
  const countPaths = (currentRow, currentCol, steps) => {
    steps = steps || 0;
    if (!matrix[currentRow] || !matrix[currentRow][currentCol]) {
      // console.log('GOT HERE')
      return;
    }
    // keep robot away from wall
    if (matrix[currentRow][currentCol] === '#' || matrix[currentRow][currentCol] === '0') {
      // console.log('FOUND A WALL', steps)
      return;
    }
    // check if you're at the final position
    if (!solutions[`${currentRow}-${currentCol}`]) {
      solutions[`${currentRow}-${currentCol}`] = true;
    }
    if (steps === 50) {
      return;
    }
    // if (currentRow === finalRow && currentCol === finalCol) {
    //   // console.log('AT DESTINATION')
    //   solutions.push(steps);
    //   if (steps < min) {
    //     min = steps;
    //   }
    //   return;
    // }

    matrix[currentRow][currentCol] = '0';
    countPaths(currentRow + 1, currentCol, steps + 1);
    countPaths(currentRow - 1, currentCol, steps + 1);
    countPaths(currentRow, currentCol + 1, steps + 1);
    countPaths(currentRow, currentCol - 1, steps + 1);
    matrix[currentRow][currentCol] = '.';
  }
  countPaths(1, 1)
  // console.log('solutions:', solutions);
  for (let keys in solutions) {
    paths += 1;
  }
  console.log(paths)
  return paths;
}

mazePaths(myMaze.maze.slice(), 39, 31)
// myMaze.maze.forEach(row => {
//   console.log(row.join(''));
// })

// create function given the coordinates if the spot is wall of open space
// recurize, counting steps, add any valid solution to an array and find the minimum
