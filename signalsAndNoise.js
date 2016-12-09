const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '/inputs_adventOfCode/signalsAndNoise_input.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  }
  // console.log(data)
  let rawInput = data.split('\n');
  let storage = {};

  // for (var j = 0; j < rawInput.length; j++) {
  //   let line = rawInput[j];
  //   for (let i = 0; i < line.length; i++) {
  //     // for each column, create a storage array
  //     if (!storage[i]) {
  //       // if it doesn't exist, create a storage object
  //       storage[i] = {max: 0};
  //     }
  //     if (!storage[i][line[i]]) {
  //       storage[i][line[i]] = 0;
  //     }
  //     let currentVal = storage[i][line[i]] += 1;
  //     if (currentVal > storage[i]['max']) {
  //       storage[i]['max'] = currentVal;
  //     }
  //   }
  // }
  // let finalMessage = '';
  // for (let i = 0; i <= 7; i++) {
  //   console.log(storage, 'storage')
  //   for (var key in storage[i]) {
  //     // console.log(storage[i]['max'], 'max', storage[i][key], key)
  //     if (key !== 'max' && storage[i][key] === storage[i]['max'] ) {
  //       console.log(storage[i][key], 'key', key)
  //       finalMessage += key;
  //       continue
  //     }
  //   }
  // }
  // console.log(finalMessage, 'finalMessage');

  for (var j = 0; j < rawInput.length; j++) {
    let line = rawInput[j];
    for (let i = 0; i < line.length; i++) {
      // for each column, create a storage array
      if (!storage[i]) {
        // if it doesn't exist, create a storage object
        storage[i] = {};
      }
      if (!storage[i][line[i]]) {
        storage[i][line[i]] = 0;
      }
      let currentVal = storage[i][line[i]] += 1;
    }
  }
  let finalMessage = '';
  for (let i = 0; i <= 7; i++) {
    let min = Infinity;
    let minLetter = '';
    for (var key in storage[i]) {
      if (storage[i][key] < min) {
        min = storage[i][key];
        minLetter = key;
      }

    }
    finalMessage += minLetter;
  }
  console.log(finalMessage, 'finalMessage');

})