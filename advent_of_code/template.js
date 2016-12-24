const fs = require('fs');
const path = require('path')
const day = 12;
/*

*/

fs.readFile(path.join(__dirname, `/day${day}_input.js`),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 
  data = data.split('\n');
})

function assert(expectedBehavior, descriptionOfExpectedBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfExpectedBehavior);
  } else {
    console.log('test passed');
  }
}