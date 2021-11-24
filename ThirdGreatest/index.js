function ThirdGreatest(strArr) {
  strArr.sort(function (a, b) {
    return b.length - a.length
  })

  if (strArr.length > 3) {
    for (var i = 2; i < strArr.length; i++) {
      if (strArr[i].length !== strArr[i + 1].length) { return strArr[i]; }
      else {
        return strArr[strArr.length - 1];
      }
    }
  }

  return strArr[2];

}

// keep this function call here 
console.log(ThirdGreatest(readline()));