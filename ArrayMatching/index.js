function ArrayMatching(strArr) {
  var arr1 = JSON.parse(strArr[0]);
  var arr2 = JSON.parse(strArr[1]);
  var arr = [];
  var longestArr = [];
  var shortestArr = []

  if (arr1.length < arr2.length) {
    longestArr = arr2;
    shortestArr = arr1;
  } else {
    longestArr = arr1;
    shortestArr = arr2;
  }

  for (var i = 0; i < longestArr.length; i++) {
    if (shortestArr[i]) {
      arr.push(arr1[i] + arr2[i]);
    } else {
      arr.push(longestArr[i]);
    }
  }

  var result = arr.join().replace(/\,/g, "-")
  return result;

}

// keep this function call here 
console.log(ArrayMatching(readline()));