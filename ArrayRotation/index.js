function ArrayRotation(arr) {
  var firstItem = arr[0];
  var newArr = [];

  for (var i = firstItem; i <= arr.length; i++) {
    if (arr.length === newArr.length) {
      break;
    }
    newArr.push(arr[i]);
    if (i === arr.length - 1) {
      i = -1;
    }
  }

  result = newArr.join().replace(/\,/g, "");

  return  result;
}

// keep this function call here 
console.log(ArrayRotation(readline()));