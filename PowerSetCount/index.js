function PowerSetCount(arr) {
  let length = arr.length;
  var result = Math.pow(2, length);
  return result;
}

// keep this function call here
console.log(PowerSetCount(readline()));
