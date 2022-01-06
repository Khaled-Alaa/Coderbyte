function SumMultiplier(arr) {
  let summedArr = arr.reduce((sum, item) => {
    sum = item + sum;
    return sum;
  });
  let sortedArr = arr.sort((a, b) => {
    return b - a;
  });
  let multiplied = sortedArr[0] * sortedArr[1];

  if (multiplied > summedArr * 2) {
    return true;
  }
  return false;
}

// keep this function call here
console.log(SumMultiplier(readline()));
