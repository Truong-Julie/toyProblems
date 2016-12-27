const md5 = require('blueimp-md5');

// assumes a five of a kind and a triple can be in the same hash
// const tripletDetection = (hash) => {
//   for (let i = 0; i < hash.length - 2; i++) {
//     if (hash[i] === hash[i + 2] && hash[i] === hash[i + 1]) {
//       return hash[i];
//     }
//   }
// }
// const fiveOfAKindDetection = (hash) => {
//   for (let i = 0; i < hash.length - 4; i++) {
//     let index0 = hash[i];
//     if (hash[i] === hash[i + 4] && hash[i] === hash[i + 1] && hash[i + 1] === hash[i + 2]) {
//       return hash[i];
//     }
//   }
// }

class Node {
  constructor (value, index) {
    this.value = value;
    this.index = index;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  enqueue (value, index) {
    let node = new Node(value, index);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
    return node;
  }
  dequeue() {
    if (!this.head) {
      return null;
    } 
    let node = this.head;
    this.size -= 1;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return node;
    }
    this.head = this.head.next;
    return node;
  }
};

const repeatDetection = (hash, numChar) => {
  let index = 0;
  while (index < hash.length - (numChar - 1)) {
    let char = hash[index];
    let noMatch = false;
    for (let i = numChar - 1; i > 0; i--) {
      if (hash[index + i] !== char) {
        noMatch = true;
        break;
      }
    }
    if (!noMatch) {
      return char;
    }
    index++;
  }
  return null;
}

// let test = repeatDetection('bbdbd', 3)
// console.log(test)

// add keys as true

    // let currentHead = queue.head;
    // while(!tripletStorage[currentHead.value]){
    //   queue.dequeue();
    // }
let tripletStorage = {};
let queue = new LinkedList();
let validkeys = [];
// let salt = 'qzyelonm';
let countCurrentKeys = 0;
let salt = 'abc';
let index = 0;
let goalKeyNumber = 64;
while (validkeys.length <= goalKeyNumber) {
  let hash = md5(salt + index.toString());

  if (queue.head && index > +queue.head.index + 1000) {
    let deleteKey = queue.dequeue().value;
    if (tripletStorage[deleteKey]) {
      tripletStorage[deleteKey] = tripletStorage[deleteKey].slice(1);
    }
  }

  let possibleFiveOfAKind = repeatDetection(hash, 5);
  let currentKey = repeatDetection(hash, 3);

  if (possibleFiveOfAKind) {
    if (tripletStorage[possibleFiveOfAKind]) {
      validkeys = validkeys.concat(tripletStorage[possibleFiveOfAKind]);
      // while (validkeys.length < goalKeyNumber && tripletStorage[possibleFiveOfAKind].length > 0) {
      //   validkeys.push(tripletStorage[possibleFiveOfAKind][0]);
      //   tripletStorage[possibleFiveOfAKind] = tripletStorage[possibleFiveOfAKind].slice(1);
      // }
      delete tripletStorage[possibleFiveOfAKind];
    }
  } else {
    if (currentKey) {
      if (!tripletStorage[currentKey]) {
        tripletStorage[currentKey] = [];
      }
      tripletStorage[currentKey].push(index);
      queue.enqueue(currentKey, index);
    }
  }
  index += 1;
} 
console.log(md5('abc22193'))
// console.log(validkeys.slice(0, 65))

let test = validkeys.slice(0, 65);
console.log(test)
console.log(test.sort((a, b) => {
  return +a - +b;
}).indexOf(22728));


// '22728'











