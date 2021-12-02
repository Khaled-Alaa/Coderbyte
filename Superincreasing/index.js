function Superincreasing(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    if (sum >= arr[i + 1]){
      return false
    }
  }
  return true 
}

// keep this function call here 
console.log(Superincreasing(readline()));