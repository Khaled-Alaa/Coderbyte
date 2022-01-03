function PermutationStep(num) {
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(num), myFunc);

  for (let i = intArr.length - 1; i >= 0; i--) {
    let clonedArr = [...intArr];
    let one = intArr[i];
    let two = intArr[i - 1];
    clonedArr[i] = two;
    clonedArr[i - 1] = one;
    let newNum = clonedArr.join("");
    if (newNum > num) {
      arr = clonedArr.splice(0, i);
      clonedArr = clonedArr.sort();
      var result = arr.concat(clonedArr);
      result = result.join("");
      return result;
    }
  }
  return -1;
}

// keep this function call here
console.log(PermutationStep(readline()));
