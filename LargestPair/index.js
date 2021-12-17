function LargestPair(num) {
  if (num < 100) {
    return num
  }

  let myFunc = num => Number(num);
  let intArr = Array.from(String(num), myFunc);
  let stringArr = intArr.map(String);
  let newArr = []

  for (var i = 0; i < stringArr.length; i++) {
    if (stringArr[i + 1]) {
      newArr.push(stringArr[i] + stringArr[i + 1])
    }
  }

  newArr = newArr.map(Number).sort(function (a, b) {
    return b - a
  })

  return newArr[0];
}

// keep this function call here 
console.log(LargestPair(readline()));