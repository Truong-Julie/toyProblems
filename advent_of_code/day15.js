/*
INPUT
Disc #1 has 17 positions; at time=0, it is at position 15.
Disc #2 has 3 positions; at time=0, it is at position 2.
Disc #3 has 19 positions; at time=0, it is at position 4.
Disc #4 has 13 positions; at time=0, it is at position 2.
Disc #5 has 7 positions; at time=0, it is at position 2.
Disc #6 has 5 positions; at time=0, it is at position 0.
*/


// create a function given disc position, # positions, #start position and time returns end position
// increment time if all === 0 then return 

const discPosition = (discDepth, numberOfPositions, startPosition, timeButtonPressed) => {
  let positionsMoved = discDepth + timeButtonPressed; 
  let finalPosition = (positionsMoved % numberOfPositions) + startPosition;
  if (finalPosition >= numberOfPositions) {
    return finalPosition - numberOfPositions;
  }
  return finalPosition;
}

var disc1 = 15;
var disc2 = 2;
var disc3 = 4;
var disc4 = 2;
var disc5 = 2;
var disc6 = 0;
var disc7 = 0;
let time = 0;

while (disc1 !== 0 || disc2 !== 0 || disc3 !== 0 || disc4 !== 0 || disc5 !== 0 || disc6 !== 0 || disc7 !== 0) {
  console.log('current time: ', time);
  disc1 = discPosition(1, 17, 15, time);
  disc2 = discPosition(2, 3, 2, time);
  disc3 = discPosition(3, 19, 4, time);
  disc4 = discPosition(4, 13, 2, time);
  disc5 = discPosition(5, 7, 2, time);
  disc6 = discPosition(6, 5, 0, time);
  disc7 = discPosition(7, 11, 0, time);
  time += 1;
}
console.log(disc1, disc2, disc3, disc4, disc5, disc6, disc7);
console.log('final time:', time - 1);
// let finalPlace1 = discPosition(1, 5, 4, 5)
// let finalPlace2 = discPosition(2, 2, 1, 5)
// console.log(finalPlace1)
// console.log(finalPlace2)
// create cyclic linked lists, have then all increment at speed one

// Disc #1 has 5 positions; at time=0, it is at position 4.
// Disc #2 has 2 positions; at time=0, it is at position 1.