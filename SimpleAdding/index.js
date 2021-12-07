function SimpleAdding(num) {

  var result = 0
  for (var i = 0; i <= num; i++) {
    result = result + i
  }
  return result;

}

// keep this function call here 
console.log(SimpleAdding(readline()));