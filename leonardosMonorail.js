/*

--- Day 12: Leonardo's Monorail ---

You finally reach the top floor of this building: a garden with a slanted glass ceiling. Looks like there are no more stars to be had.

While sitting on a nearby bench amidst some tiger lilies, you manage to decrypt some of the files you extracted from the servers downstairs.

According to these documents, Easter Bunny HQ isn't just this building - it's a collection of buildings in the nearby area. They're all connected by a local monorail, and there's another building not far from here! Unfortunately, being night, the monorail is currently not operating.

You remotely connect to the monorail control systems and discover that the boot sequence expects a password. The password-checking logic (your puzzle input) is easy to extract, but the code it uses is strange: it's assembunny code designed for the new computer you just assembled. You'll have to execute the code and get the password.

The assembunny code you've extracted operates on four registers (a, b, c, and d) that start at 0 and can hold any integer. However, it seems to make use of only a few instructions:

cpy x y copies x (either an integer or the value of a register) into register y.
inc x increases the value of register x by one.
dec x decreases the value of register x by one.
jnz x y jumps to an instruction y away (positive means forward; negative means backward), but only if x is not zero.
The jnz instruction moves relative to itself: an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

For example:

cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a
The above code would set register a to 41, increase its value by 2, decrease its value by 1, and then skip the last dec a (because a is not zero, so the jnz a 2 skips it), leaving register a at 42. When you move past the last instruction, the program halts.

After executing the assembunny code in your puzzle input, what value is left in register a?

// */
class Register {
  constructor () {
    this.a = 0;
    this.b = 0;
    this.c = 1;
    this.d = 0;
  }
  copy (instruction) {
    let str = instruction.split(' ');
    let num = str[1];
    let register = str[2];
    if (+num) {
      this[register] = +num;
    } else {
      this[register] = this[str[1]];
    }
    return this[register];
  }
  increase (instruction) {
    let register = instruction.split(' ')[1];
    this[register] += 1;
    return this[register];
  }
  decrease (instruction) {
    let register = instruction.split(' ')[1];
    this[register] -= 1;
    return this[register];
  }

}

const executeFunction = (register, instruction) => {
  if (instruction.match(/cpy/)) {
    register['copy'](instruction);
  }
  if (instruction.match(/inc/)) {
    register['increase'](instruction);
  }
  if (instruction.match(/dec/)) {
    register['decrease'](instruction);
  }
}

const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, '/advent_of_code/day12_input.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 
  const myRegister = new Register();
  data = data.split('\n');

  let loopSize = data.length;
  let i = 0; 
  while (i < loopSize) {
    let instruction = data[i];
    if (instruction.match(/jnz/)) {
      let register = instruction.split(' ')[1];
      let y = +instruction.split(' ')[2];
      if (register !== '0' && myRegister[register] !== 0) {
        executeFunction(myRegister, data[i + y]);
        i = i + y;
      }
    } else {
      executeFunction(myRegister, instruction);
    }
    i += 1;
  }
  console.log('Value at a', myRegister.a);
})

// function assert(expectedBehavior, descriptionOfExpectedBehavior) {
//   if (!expectedBehavior) {
//     console.log(descriptionOfExpectedBehavior);
//   } else {
//     console.log('test passed');
//   }
// }