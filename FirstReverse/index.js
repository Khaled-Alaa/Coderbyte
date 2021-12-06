function FirstReverse(str) {
  var newString = str.split('').reverse().join('')
  return newString
}

// keep this function call here 
console.log(FirstReverse(readline()));