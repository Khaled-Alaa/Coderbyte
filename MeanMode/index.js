function MeanMode(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  var mean = sum / arr.length

  var sorting = arr.sort(function (a, b) {
    return a - b;
  });

  var mode = 0;

  for (var j = 0; j < sorting.length; j++) {
    if (j + 1 < sorting.length) {
      if (sorting[j] == sorting[j + 1]) {
        mode = sorting[j]
        break;
      }
    }
  }
  if (mean === mode) {
    return 1
  }
  return 0
}

// keep this function call here 
console.log(MeanMode(readline()));