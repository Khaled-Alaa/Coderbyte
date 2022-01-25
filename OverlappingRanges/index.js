function OverlappingRanges(arr) {
  let count = 0;
  for (let i = arr[0]; i < arr[1]; i++) {
    if (i >= arr[2] && i <= arr[3]) {
      count = count + 1;
    }
  }
  return count >= arr[4] ? true : false;
}

// keep this function call here
console.log(OverlappingRanges(readline()));
