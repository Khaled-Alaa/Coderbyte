function LargestFour(arr) {
  var sum = 0;
  if (arr.length <= 4) {
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i]
    }
    return sum
  }

  arr.sort(function (a, b) {
    return b - a
  })

  for (var i = 0; i <= 3; i++) {
    sum = sum + arr[i]
  }
  return sum
}

// keep this function call here 
console.log(LargestFour(readline()));