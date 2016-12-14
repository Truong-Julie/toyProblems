const fs = require('fs');
const path = require('path')

/*

*/

fs.readFile(path.join(__dirname, '/inputs_adventOfCode/input.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 
}

function assert(expectedBehavior, descriptionOfExpectedBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfExpectedBehavior);
  } else {
    console.log('test passed');
  }
})