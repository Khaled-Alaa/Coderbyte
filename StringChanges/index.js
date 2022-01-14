function StringChanges(str) {
  let arrStr = str.split("");

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === "M") {
      if (i > 0) {
        arrStr[i] = arrStr[i - 1];
      } else {
        arrStr.splice(i, 1);
      }
      i = i - 1;
    } else if (arrStr[i] === "N") {
      arrStr.splice(i, 2);
      i = i - 1;
    }
  }

  return arrStr.join("");
}

// keep this function call here
console.log(StringChanges(readline()));
