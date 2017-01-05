const kadane = (arr) => {
  let max_current = arr[0];
  let max_global = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // grabs either adding to the current sequence or restarting the sequence
    max_current = Math.max(arr[i], max_current + arr[i]);
    if (max_current > max_global) {
      max_global = max_current;
    }
    console.log(arr[i], 'current arr[i]', max_current, 'current max_current', max_global, 'max_global')
  }
} 

let arr1 = [-1, 6, 20, -10, 7, 5, -3, 10, 4, -58, 40];

kadane(arr1);

// 28