function SimpleEvens(num) {
  if (num < 10 && num % 2 > 0) {
    return false;
  } else if (num < 10 && num % 2 === 0) {
    return true;
  }

  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(num), myFunc);
  if (num >= 10) {
    for (let i = 0; i < intArr.length; i++) {
      if (intArr[i] % 2 > 0) {
        return false;
      }
    }
    return true;
  }
}

// keep this function call here
console.log(SimpleEvens(readline()));
