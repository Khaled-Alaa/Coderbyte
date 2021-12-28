function SerialNumber(str) {
  var strArr = str.split(".");
  var arr = strArr.map(sector => sector.split('').map(x => +x));
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 3) {
      return false;
    } else if (arr[i][2] > arr[i][1] && arr[i][2] > arr[i][0]) {
      flag = true
    } else {
      flag = false
    }
  }
  var reducer = (sum, item) => sum + item
  if (flag) {
    if (arr[0].reduce(reducer) % 2 === 0 && arr[1].reduce(reducer) % 2 === 1) {
      return true
    }
    return flase
  }
  return false
}

// keep this function call here 
console.log(SerialNumber(readline()));