const fs = require('fs');
const path = require('path')

/*
--- Day 9: Explosives in Cyberspace ---

Wandering around a secure area, you come across a datalink port to a new part of the network. After briefly scanning it for interesting files, you find one file in particular that catches your attention. It's compressed with an experimental format, but fortunately, the documentation for the format is nearby.

The format compresses a sequence of characters. Whitespace is ignored. To indicate that some sequence should be repeated, a marker is added to the file, like (10x2). To decompress this marker, take the subsequent 10 characters and repeat them 2 times. Then, continue reading the file after the repeated data. The marker itself is not included in the decompressed output.

If parentheses or other characters appear within the data referenced by a marker, that's okay - treat it like normal data, not a marker, and then resume looking for markers after the decompressed section.

For example:

ADVENT contains no markers and decompresses to itself with no changes, resulting in a decompressed length of 6.
A(1x5)BC repeats only the B a total of 5 times, becoming ABBBBBC for a decompressed length of 7.
(3x3)XYZ becomes XYZXYZXYZ for a decompressed length of 9.
A(2x2)BCD(2x2)EFG doubles the BC and EF, becoming ABCBCDEFEFG for a decompressed length of 11.
(6x1)(1x3)A simply becomes (1x3)A - the (1x3) looks like a marker, but because it's within a data section of another marker, it is not treated any differently from the A that comes after it. It has a decompressed length of 6.
X(8x2)(3x3)ABCY becomes X(3x3)ABC(3x3)ABCY (for a decompressed length of 18), because the decompressed data from the (8x2) marker (the (3x3)ABC) is skipped and not processed further.
What is the decompressed length of the file (your puzzle input)? Don't count whitespace.
*/

// let data = 'A(1x5)BC';
// let data = '(3x3)XYZ';
// let data = 'A(2x2)BCD(2x2)EFG';
// let data = '(6x1)(1x3)A';
// let data = 'X(8x2)(3x3)ABCY';
// let data = '(172x1)(3x7)XPJ(70x4)(40x7)WKQANMDILIQOOWQZDNGORPHFNHBKKKVQEJNUVNAQ(3x2)VFV(10x1)XUNNCAFYMV(9x13)OUIKISEPR(66x13)(10x6)JHDDURBDQC(3x11)SNT(2x11)EW(16x6)WMJFKTNQEACIZXLH(5x12)KPVAD(13x8)(8x2)ELNIDSSO(11x7)RFITQIJYVQB(6x5)HTVSFUVZ(89x12)(44x5)(7x1)VHEWGTT(5x11)GLDZO(14x13)DZVEJXGSGUDJKV(24x14)(18x3)AWXPFDVHVRRUAIELQO(2x13)UW(120x7)(62x7)(21x10)JFUYPPCABHPYTIJUUIEVK(5x5)UNAMQ(17x14)TFQKSOALOJYMSMLMK(17x2)NBDXRSHFDREHZPWMM(23x5)(1x11)O(10x6)QVOCIXBIQW(5x10)FOLCQ(6635x5)(3576x2)(456x13)(449x3)(1x2)M(1x11)I(215x14)(28x2)(1x14)R(9x7)OSMSWTRTV(2x3)RP(87x2)(14x9)QACULEYKFWPHFQ(41x15)LTBJBTBTFQLLEAWJTICLZBHGAYERVARMDLCBZXYPY(4x6)CEOP(4x13)JQJI(62x5)(15x6)YQPFVDNREIYOUKL(15x15)PUSBXTHCMLGOCNT(8x4)YAUHTKIM(1x1)E(14x2)(9x1)YHUAWBSED(37x12)(14x9)(8x11)';

fs.readFile(path.join(__dirname, '/inputs_adventOfCode/explosivesInCyberspace.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 
  let finalString = '';
  for (let i = 0; i < data.length; i++) {
    // start of a marker
    if (data[i] === '(') {
      let chars = '';
      ++i
      while (data[i] !== 'x') {
        chars += data[i];
        i++;
      }
      chars = eval(chars);
      // console.log(chars, 'eval of chars')
      ++i
      let repeat = '';
      while(data[i] !== ')') {
        repeat += data[i];
        ++i;
      }
      repeat = eval(repeat);
      // console.log(repeat, 'repeat of chars')
      ++i;
      let repeatString = data.slice(i, i + chars);
      // console.log(repeatString.length, 'repeated string', repeatString)
      for (let j = 0; j < repeat; j++) {
        finalString += repeatString;
      }
      i = i + chars - 1;
    } else {
      finalString += data[i];
    }
  }
  // console.log(data.length, 'length')
  console.log(finalString.length - 1);
  // console.log(finalString[110345]);

})

// function assert(expectedBehavior, descriptionOfExpectedBehavior) {
//   if (!expectedBehavior) {
//     console.log(descriptionOfExpectedBehavior);
//   } else {
//     console.log('test passed');
//   }
// }