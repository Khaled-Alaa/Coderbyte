function FirstFactorial(num) {
  var total = 1
  var cloneNum = num
  if (num === 1) {
    return total
  } else {
    for (let i = cloneNum; i > 0; i--) {
      total *= cloneNum
      cloneNum = cloneNum - 1
    }
    return total
  }
}

// keep this function call here 
console.log(FirstFactorial(readline()));