const bestDivisor = (n) => {
  let best = 0;
  if (n <= 9) {
    return n;
  }
  for (let i = Math.floor(n / 2); i > 0; i--) {
    // console.log(i, 'i')
    if (n % i === 0) {
      if (summed(n / i) > summed(best)) {
        best = n / i;
      } 
      if (summed(i) > summed(best)) {
        best = i;
      }
      if (summed(n / i) === summed(best)) {
        best = Math.min(n / i);
      } 
      if (summed(i) === summed(best)) {
        best = Math.min(i, best)
      }
    }
  }
  return console.log(best);
}

var summed = function(n) {
  n = n.toString();
  var sum = 0;
  while (n.length > 0) {
    sum += +n[0];
    n = n.slice(1)
  }
  return sum;
}

for (var i = 0; i < 365; i++) {
  console.log(bestDivisor(i))
}
// console.log(bestDivisor(2))
// console.log(bestDivisor(100))
// console.log(bestDivisor(22))
// console.log(bestDivisor(12))