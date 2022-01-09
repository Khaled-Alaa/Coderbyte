function SwapCase(str) {
  let arrStr = str.split("");
  let newStr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == arrStr[i].toUpperCase()) {
      newStr.push(arrStr[i].toLowerCase());
    } else {
      newStr.push(arrStr[i].toUpperCase());
    }
  }
  return newStr.join("");
}

// keep this function call here
console.log(SwapCase(readline()));
