function NumberReverse(str) {
  var arr = str.split(' ').reverse()
  var newStr = arr.join().replace(/\,/g, " ")

  return newStr

}

// keep this function call here 
console.log(NumberReverse(readline()));