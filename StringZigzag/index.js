function StringZigzag(strArr) {

  if (strArr[0].length <= strArr[1]) {
    return strArr[0]
  }

  if (strArr[1] == 1) {
    return strArr[0]
  }

  var newArray = []

  for (var j = 0; j < strArr[1]; j++) {
    newArray.push([])
  }

  var k = 0
  var down = true

  for (var i = 0; i < strArr[0].length; i++) {
    let char = strArr[0].charAt(i)
    newArray[k].push(char)

    if (k == 0 && down == false) {
      down = true
    }
    if (down == false && k != 0) {
      k--
    }
    if (k + 1 == strArr[1]) {
      down = false
      k--
    }
    if (down) {
      k++
    }
  }
  var arr = [].concat.apply([], newArray);
  var result = arr.join("");

  return result;

}

// keep this function call here 
console.log(StringZigzag(readline()));