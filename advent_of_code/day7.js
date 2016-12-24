const fs = require('fs');
const path = require('path')

/*
--- Day 7: Internet Protocol Version 7 ---

While snooping around the local network of EBHQ, you compile a list of IP addresses (they're IPv7, of course; IPv6 is much too limited). You'd like to figure out which IPs support TLS (transport-layer snooping).

An IP supports TLS if it has an Autonomous Bridge Bypass Annotation, or ABBA. An ABBA is any four-character sequence which consists of a pair of two different characters followed by the reverse of that pair, such as xyyx or abba. However, the IP also must not have an ABBA within any hypernet sequences, which are contained by square brackets.

For example:

abba[mnop]qrst supports TLS (abba outside square brackets).
abcd[bddb]xyyx does not support TLS (bddb is within square brackets, even though xyyx is outside square brackets).
aaaa[qwer]tyui does not support TLS (aaaa is invalid; the interior characters must be different).
ioxxoj[asdfgh]zxcvbn supports TLS (oxxo is outside square brackets, even though it's within a larger string).
How many IPs in your puzzle input support TLS?
*/


// create a function that determines if a string has a valid abba, autonomous bridge bypass annotation
// for each letter, check 3 indexes ahead if it's the same letter 
  // check the letters inside if they're the same
// return true if they have an abba
const checkValidABBA = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i + 3] && str[i] === str[i + 3]) {
      if (str[i] !== str[i + 1] && str[i + 1] === str[i + 2]) {
        // console.log(str[i], str[i + 1], str[i + 2], str[i + 3])
        return true;
      }
    }
  }
  return false;
}

// Area-Broadcast Accessor
// Byte-Allocation Block
const checkValidBAB = (hyperEntriesArray) => {
  let validBAB = [];
  hyperEntriesArray.forEach(entry => {
    for (let i = 0; i < entry.length; i++) {
      if (entry[i + 2] && entry[i] === entry[i + 2] && entry[i] !== entry[i + 1]) {
        validBAB.push('' + entry[i + 1] + entry[i] + entry[i + 1]);
      }
    }
  })
  return validBAB;
}

const checkValidABA = (nonHyperEntriesArray, babs) => {
  for (let j = 0; j < babs.length; j++) {
    for (let i = 0; i < nonHyperEntriesArray.length; i++) {
      if (nonHyperEntriesArray[i].indexOf(babs[j]) > -1) {
        return true;
      }
    }
  }
  return false;
}

const collectHypernetEntries = (str) => {
  return str.split('[').slice(1).reduce((accumulator, currentItem, index) => {
    return accumulator.concat(currentItem.split(']')[0]);
  }, []);
};

const collectNonHypernetEntries = (str) => {
  return str.split(']').reduce((accumulator, currentItem, index) => {
    return accumulator.concat(currentItem.split('[')[0]);
  }, []);
};

const checkValidIPV7 = (str) => {
  // collect all hypernetEntries
  let hypernetEntries = collectHypernetEntries(str);
  // iterate through list of hypernetEntries

  for (let i = 0; i < hypernetEntries.length; i++) {
    // call checkValidABBA on entries, if true 
    if (checkValidABBA(hypernetEntries[i])) {
      // return false
      return false;
    }
  }
  // collect all non hypernetEntries
  let nonHypernetEntries = collectNonHypernetEntries(str);

  for (let i = 0; i < nonHypernetEntries.length; i++) {
    // call checkValidABBA on entries, if true 
    if (checkValidABBA(nonHypernetEntries[i])) {
      return true;
    }
  }
  return false;
}

const checkValidSSL = (str) => {
  // collect all hypernetEntries
  let hypernetEntries = collectHypernetEntries(str);
  let nonHypernetEntries = collectNonHypernetEntries(str);
  let collectionBAB = checkValidBAB(hypernetEntries);
  if (checkValidABA(nonHypernetEntries, collectionBAB)) {
    return true;
  } 
  return false;

}
// let testString1 = 'bbmmzbebuexzmtbr[tpzfxmwgamhaikfpaeu]kraaocehdtalyjrf[zzqqtjplepyidohpvx]kzehgejueimxlqglfj[zgysopfdgxtokkdxwk]gwcfaflybmhdgoxjq';
// let testString2 = 'evxuuxfhpivnmknolsj[itpsnnhbtrrbllsbo]gefodpceljlvwuahz';
// let testString3 = 'zeebynirxqrjbdqzjav[cawghcfvfeefkmx]xqcdkvawumyayfnq[qhhwzlwjvjpvyavtm]sbnvwssglfpyacfbua[wpbknuubmsjjbekkfy]icimffaoqghdpvsbx';
// let testString4 = 'zmnirrxetiwyese[cedxmaoadgjjvsesk]nuisspyclmncqlasmuy[zxwlwmbzbjmvubgcf]hfqniztoirmsdwz[zlffqhttbpehxoabzhx]upmydjwzzwefvgdpqu';
// console.log(checkValidIPV7(testString1), 'checkValidIPV7 --- false')
// console.log(checkValidIPV7(testString2), 'checkValidIPV7 --- false')
// console.log(checkValidIPV7(testString3), 'checkValidIPV7 --- false')
// console.log(checkValidIPV7(testString4), 'checkValidIPV7 --- true')

// fs.readFile(path.join(__dirname, '/inputs_adventOfCode/internetProtocolVersion7_inputs.js'),'utf-8',  (err, data) => {
//   if (err) {
//     console.log('Error: ', err)
//   } 

//   let input = data.split('\n');
//   let totalValid = 0;
//   let totalTLS = 0;
//   let invalidCodes = [];
//   input.forEach(line => {
//     totalTLS += 1;
//     if (checkValidIPV7(line)) {
//       fs.appendFile(path.join(__dirname, '/inputs_adventOfCode/internetProtocolVersion7_inputs_part1.txt'), line + '\n', (err) => {
//         if (err) {
//           console.log('Error: ', err);
//         } 
//         totalValid += 1;
//       })
//     } 
//   })
//   console.log('Total valid transfers: ', totalValid, ' out of ', totalTLS, 'TLS calls')
// })

fs.readFile(path.join(__dirname, '/inputs_adventOfCode/internetProtocolVersion7_inputs.js'),'utf-8',  (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } 

  let input = data.split('\n');
  let totalValid = 0;
  let totalTLS = 0;
  let invalidCodes = [];
  input.forEach(line => {
    totalTLS += 1;
    if (checkValidSSL(line)) {
      totalValid += 1
    } 
  })
  console.log('Total valid transfers: ', totalValid, ' out of ', totalTLS, 'TLS calls')
})

function assert(expectedBehavior, descriptionOfExpectedBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfExpectedBehavior);
  } else {
    console.log('test passed');
  }
}