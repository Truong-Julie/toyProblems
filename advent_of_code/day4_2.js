const isRoomValid = (line) => {
  // console.log(line, 'input')
  let checksum = line.split('[')[1].slice(0, -1).split('');
  let letters = line.split('[')[0];
  let storage = {};
  let finalArray = [];
  let max = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== '-' && letters[i] !== '0' && !Number(letters[i])) {
      if (!storage[letters[i]]) {
        storage[letters[i]] = 0;
      }
      storage[letters[i]] += 1;
      if ( storage[letters[i]] > max) {
        max = storage[letters[i]];
      }
    }
  }

  finalRank = [];
  let uniqueKeys = Object.keys(storage).length;
  while (finalRank.length < uniqueKeys) {
    currentCount = [];
    for (var key in storage) {
      if (storage[key] === max) {
        currentCount.push(key);
      }
    }
    max--;
    finalRank = finalRank.concat(currentCount.sort());
  }
  finalRank = finalRank.slice(0, 5);
  console.log(finalRank)
  for (let i = 0; i < checksum.length; i++) {
    if (finalRank.indexOf(checksum[i]) === -1) {
      return false;
    }
  }
  return true;

}

const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, '/inputs_adventOfCode/input.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 

  let totalRealRooms = 0;
  let roomCount = 0;
  let input = data.split('\n');

  let validRooms = [];
  let notValidRooms = [];
  for (let i = 0; i < input.length; i++) {
    roomCount++
    // console.log(input[i], 'current input')
    if (input[i] === '') {
      console.log('here')
      break;
    }
    console.log(input[i])
    if (isRoomValid(input[i])) {
      totalRealRooms++;
    }
  }
  console.log(totalRealRooms, 'totalRealRooms', roomCount, input.length)
})

















// console.log(isRoomValid('totally-real-room-200[decoy]'), false);
// console.log(isRoomValid('a-b-c-d-e-f-g-h-987[abcde]'), true);
// console.log(isRoomValid('aaaaa-bbb-z-y-x-123[abxyz]'), true);
// console.log(isRoomValid('not-a-real-room-404[oarel]'), true);