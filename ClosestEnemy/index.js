function ClosestEnemy(arr) {
  let indexOfOne = arr.indexOf(1);
  let indexOfTwo = 0;

  for (let i = indexOfOne; i < arr.length; i++) {
    if (arr[i] === 2) {
      indexOfTwo = i;
      return Math.abs(indexOfOne - indexOfTwo);
    }
  }

  for (let j = indexOfOne; j >= 0; j--) {
    if (arr[j] === 2) {
      indexOfTwo = j;
      return Math.abs(indexOfOne - indexOfTwo);
    }
  }

  return 0;
}

// keep this function call here
console.log(ClosestEnemy(readline()));
