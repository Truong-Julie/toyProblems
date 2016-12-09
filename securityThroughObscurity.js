/*
--- Day 4: Security Through Obscurity ---

Finally, you come across an information kiosk with a list of rooms. Of course, the list is encrypted and full of decoy data, but the instructions to decode the list are barely hidden nearby. Better remove the decoy data first.

Each room consists of an encrypted name (lowercase letters separated by dashes) followed by a dash, a sector ID, and a checksum in square brackets.

A room is real (not a decoy) if the checksum is the five most common letters in the encrypted name, in order, with ties broken by alphabetization. For example:

aaaaa-bbb-z-y-x-123[abxyz] is a real room because the most common letters are a (5), b (3), and then a tie between x, y, and z, which are listed alphabetically.
a-b-c-d-e-f-g-h-987[abcde] is a real room because although the letters are all tied (1 of each), the first five are listed alphabetically.
not-a-real-room-404[oarel] is a real room.
totally-real-room-200[decoy] is not.
Of the real rooms from the list above, the sum of their sector IDs is 1514.

What is the sum of the sector IDs of the real rooms?
*/

// function assert(expectedBehavior, descriptionOfExpectedBehavior) {
//   if (!expectedBehavior) {
//     console.log(descriptionOfExpectedBehavior);
//   } else {
//     console.log('test passed');
//   }
// }

// function sameArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf( arr1[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// const splitLine = (line) => {
//   let checksum = line.slice(-7).replace('[', '').replace(']', '').split('');
//   let letters = line.split('[')[0];
//   return {
//     letters, 
//     checksum
//   };
// }

// const needUpdate = (item, array, index) => {
//   let inserted = false;
//   while (!inserted) {
//     if (index === 0 ) {
//       array[index] = item;
//       return array;
//     }  
//     if (item[1] > array[index - 1][1]) {
//       array[index] = array[index - 1];
//     }
//     if (item[1] < array[index - 1][1]) {
//       // array[index] = array[index - 1];
//       array[index] = item;
//       return array;
//     }

//     if (item[1] === array[index - 1][1]) {
//       if (item[0] < array[index - 1][0]) {
//         array[index] = array[index - 1];
//       } else {
//         array[index] = item;
//         return array;
//       }
//     }
//     index--;
//   }
//   return array;
// }


// // console.log(needUpdate(['g', 2], [['a', 3],['b', 2], ['c', 1]]))


// const addToRank = (letter, currentRanks) => {
//   currentRanks = currentRanks.slice();

//   let inserted = false;
//   for (let i = 0; i < currentRanks.length; i++) {
//     if (currentRanks[i][0] === letter) {
//       currentRanks[i][1] += 1;
//       return needUpdate(currentRanks[i], currentRanks, i)
//     }
//   }

//   let index = currentRanks.length - 1;
//   if (!inserted) {
//     currentRanks.push([letter, 1])
//     return needUpdate([letter, 1], currentRanks, currentRanks.length - 1)
//   }

//   // return currentRanks;

// }

// const topFiveLetters = (letters) => {
//   let results = [];
//   for (let i = 0; i < letters.length; i++) {
//     if (!Number(letters[i]) && letters[i] !== '-' && Number(letters[i]) !== 0 ) {
//       results = addToRank(letters[i], results)
//     }
//   }
//   return results.slice(0,5).map(item => item[0]);
// }


// const isRoomValid = (checksum, topFiveLetters) => {
//   for (let i = 0; i < checksum.length; i++) {
//     if (topFiveLetters.indexOf(checksum[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// const ex1 = 'aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]';
// // assert(JSON.stringify(splitLine(ex1)) === JSON.stringify({ letters: 'aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561',
// //   checksum: [ 'p', 'a', 't', 'y', 'c' ] }), 'should split the letters and checksums')
// // assert(isRoomValid(['a','b','x','y','z'], ['a','b','x','y','z']), 'should return true if the array\'s match')
// // assert(!isRoomValid(['a','b','x','y','z'], ['p','b','x','y','z']), 'should return false if the array\'s don\'t match')
// // assert(sameArray(topFiveLetters('aaaaa-bbb-z-y-x-123'), ['a','b','x','y','z']), 'should return an array that contains the top 5 letters')
// // assert(sameArray(topFiveLetters('a-b-c-d-e-f-g-h-987'), ['a','b','c','d','e']), 'should return an array that contains the top 5 letters')
// // assert(JSON.stringify(needUpdate(['a', 5], [['b', 2], ['c', 1]])) === JSON.stringify([['a', 5],['b', 2],['c', 1]]), 'should insert item at the correct location')

// assert(isRoomValid(splitLine('totally-real-room-200[decoy]')['checksum'],splitLine('totally-real-room-200[decoy]')['letters'] )  === false, 'should return false')
// assert(isRoomValid(splitLine('a-b-c-d-e-f-g-h-987[abcde]')['checksum'],splitLine('a-b-c-d-e-f-g-h-987[abcde]')['letters'] )  === true, 'should return true')
// assert(isRoomValid(splitLine('aaaaa-bbb-z-y-x-123[abxyz]')['checksum'],splitLine('aaaaa-bbb-z-y-x-123[abxyz]')['letters'] )  === true, 'should return true')
// assert(isRoomValid(splitLine('not-a-real-room-404[oarel]')['checksum'],splitLine('not-a-real-room-404[oarel]')['letters'] )  === true, 'should return false')
// // console.log(topFiveLetters('not-a-real-room-404'), 'not-a-real-room-404')
// // console.log(topFiveLetters('totally-real-room-200'), 'totally-real-room-200')
// // console.log(topFiveLetters('a-b-c-d-e-f-g-h-987'), 'a-b-c-d-e-f-g-h-987')
// // console.log(topFiveLetters('aaaaa-bbb-z-y-x-123'), 'aaaaa-bbb-z-y-x-123')


// const fs = require('fs');
// const path = require('path')

// fs.readFile(path.join(__dirname, '/inputs_adventOfCode/input.js'),'utf-8',  (err, data) => {
//   if (err) {
//     console.log('Error: ', err)
//   } 

//   let input = data.split('\n');
//   let totalValidRooms = 0;
//   let totalRooms = 0;
//   let notValidRooms = [];
//   input.forEach(line => {
//     let split = splitLine(line);
//     totalRooms++;
//     if (isRoomValid(split['checksum'], split['letters'])) {
//       totalValidRooms++;
//     } else {
//       let currentStorage = {};
//       for (let i = 0; i < split['letters'].length; i++) {
//         if (currentStorage[split['letters'][i]]) {
//           currentStorage[split['letters'][i]] += 1;
//         } else {
//           currentStorage[split['letters'][i]] = 1;
//         }
//       }
//       split.storage = currentStorage;
//       split.topFive = topFiveLetters(split['letters'])
//       notValidRooms.push(split)
//     }
//   })
// })




