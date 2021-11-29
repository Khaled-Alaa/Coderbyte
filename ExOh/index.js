function ExOh(str) {
  var arr = str.split('');
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      xCount = xCount + 1;
    } else {
      oCount = oCount + 1;
    }
  }

  return xCount === oCount ? true : false

}

// keep this function call here 
console.log(ExOh(readline()));