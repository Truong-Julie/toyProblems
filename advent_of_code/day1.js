/*

--- Day 1: No Time for a Taxicab ---

You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.

The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

For example:

- Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
- R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
- R5, L5, R5, R3 leaves you 12 blocks away.

How many blocks away is Easter Bunny HQ?

Input: R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2

Output: Number of blocks

*/





const taxiCab = (input) => {
  let matrix = {};
  let currentCoordinate = [0, 0];
  let facing = 'north';
  let instructions = [];

  input.split(',').forEach(direction => {
    instructions.push(direction.replace(' ', ''))
  })

  let north = {
    R: (coordinate, steps) => coordinate[0] += steps,
    L: (coordinate, steps) => coordinate[0] -= steps
  };

  let west = {
    R: (coordinate, steps) => coordinate[1] += steps,
    L: (coordinate, steps) => coordinate[1] -= steps
  };

  let south = {
    R: (coordinate, steps) => coordinate[0] -= steps,
    L: (coordinate, steps) => coordinate[0] += steps
  };

  let east = {
    R: (coordinate, steps) => coordinate[1] -= steps,
    L: (coordinate, steps) => coordinate[1] += steps
  };

  let directions = {
    north,
    west, 
    south,
    east
  }

  let returnCoordinate = (facing, coordinate, instruction) => {
    let direction = instruction.split('')[0];
    let steps = +instruction.split('').splice(1).join('');
    directions[facing][direction](coordinate, steps);

    return coordinate;
  };

  let returnDirection = (facing, instruction) => {
    let direction = instruction.split('')[0];
    if (facing === 'north') {
      if (direction === 'R') {
        return 'east';
      } else {
        return 'west';
      }
    } else if (facing === 'west') {
      if (direction === 'R') {
        return 'north';
      } else {
        return 'south';
      }
    } else if (facing === 'south') {
      if (direction === 'R') {
        return 'west';
      } else {
        return 'east'
      }
    } else {
      if (direction === 'R') {
        return 'south';
      } else {
        return 'north';
      }
    }
  }

  let fillInMatrix = (matrix, ogCoordinate, currentCoordinate, crossPath) => {
    // for x coordinates;
    let startingX = Math.max(ogCoordinate[0], currentCoordinate[0]);
    let endingX = Math.min(ogCoordinate[0], currentCoordinate[0]);
    let startingY = Math.max(ogCoordinate[1], currentCoordinate[1]);
    let endingY = Math.min(ogCoordinate[1], currentCoordinate[1]);
    if (startingX - endingX !== 0) {
      while(startingX >= endingX) {
        if (matrix[ JSON.stringify([currentCoordinate[1], startingX])]) {
          crossPath = JSON.stringify([currentCoordinate[1], startingX]);
        }
        matrix[ JSON.stringify([currentCoordinate[1], startingX])] = 'x';
        startingX--;
      }
    } else {
      while(startingY >= endingY) {
        if (matrix[ JSON.stringify([startingY, currentCoordinate[0]])]) {
          crossPath = JSON.stringify([startingY, currentCoordinate[0]]);
        }
        matrix[ JSON.stringify([startingY, currentCoordinate[0]]) ] = 'x';
        startingY--;
      }
    }
    console.log(matrix)
    return crossPath;
  }

  let crossPath = null;

  instructions.forEach(instruction => {
    let temp = currentCoordinate.slice();
    currentCoordinate = returnCoordinate(facing, currentCoordinate, instruction, directions)
    crossPath = crossPath || fillInMatrix(matrix, currentCoordinate, temp, crossPath);
    facing = returnDirection(facing, instruction)
  });

  console.log(crossPath, 'crossPath')
  return Math.abs(currentCoordinate[0]) + Math.abs(currentCoordinate[1]);
}

console.log(taxiCab('R2, L3'), 5)
// console.log(taxiCab('R2, R2, R2 '), 2)
// console.log(taxiCab('R5, L5, R5, R3'), 12)
// console.log(taxiCab('R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2'))
// console.log(taxiCab('R2, L1, R2, R1, R1, L3, R3, L5, L5, L2, L1, R4, R1, R3, L5, L5, R3, L4, L4, R5, R4, R3, L1, L2, R5, R4, L2, R1, R4, R4, L2, L1, L1, R190, R3, L4, R52, R5, R3, L5, R3, R2, R1, L5, L5, L4, R2, L3, R3, L1, L3, R5, L3, L4, R3, R77, R3, L2, R189, R4, R2, L2, R2, L1, R5, R4, R4, R2, L2, L2, L5, L1, R1, R2, L3, L4, L5, R1, L1, L2, L2, R2, L3, R3, L4, L1, L5, L4, L4, R3, R5, L2, R4, R5, R3, L2, L2, L4, L2, R2, L5, L4, R3, R1, L2, R2, R4, L1, L4, L4, L2, R2, L4, L1, L1, R4, L1, L3, L2, L2, L5, R5, R2, R5, L1, L5, R2, R4, R4, L2, R5, L5, R5, R5, L4, R2, R1, R1, R3, L3, L3, L4, L3, L2, L2, L2, R2, L1, L3, R2, R5, R5, L4, R3, L3, L4, R2, L5, R5'))