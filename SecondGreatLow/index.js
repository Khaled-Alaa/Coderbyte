function SecondGreatLow(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  var result;

  if (arr.length === 2) {
    result = arr[1] + " " + arr[0];
    return result;
  }

  var lowerArr;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      lowerArr = arr[i + 1];
      break
    }
  }

  var biggerArr = arr[arr.length - 2];

  result = lowerArr + " " + biggerArr;
  return result;
}

// keep this function call here 
console.log(SecondGreatLow(readline()));