function FindIntersection(strArr) {
  var newArr = strArr.map((item) => item.split(","))
  var arr1 = newArr[0]
  var arr2 = newArr[1]
  var finalArr = []

  for (var i = 0; i < arr1.length; i++) {
    var existNo = arr2.find((item) => item.trim() == arr1[i].trim())
    if (existNo) {
      finalArr.push(existNo.trim())
    }
  }
  if (finalArr.length === 0) {
    return false
  }
  return finalArr.join(",");
}

console.log(FindIntersection(readline()));