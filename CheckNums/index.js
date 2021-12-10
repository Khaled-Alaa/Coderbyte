function CheckNums(num1, num2) {
  if (num2 > num1) {
    return true
  }

  if (num2 < num1) {
    return false
  }

  if (num2 === num1) {
    return -1
  }
}

// keep this function call here 
console.log(CheckNums(readline()));