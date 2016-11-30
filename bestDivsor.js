const bestDivisor = (n) => {
  let max = 0;
  for (let i = 9; i > 0; i--) {
    if (n % i === 0) {
      // console.log(i, 'i', summed(n / i), 'summed', n / i)
      if (summed(n / i) > summed(max)) {
        max = n / i;
      }
    }
  }
  return max;
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

console.log(bestDivisor(100))
console.log(bestDivisor(22))