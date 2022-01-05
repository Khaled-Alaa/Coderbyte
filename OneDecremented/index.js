function OneDecremented(str) {
  if (str.length === 1) return 0;
  let arrStr = str.split("").map((x) => +x);
  let count = 0;

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1] + 1) {
      count = count + 1;
    }
  }
  return count;
}

// keep this function call here
console.log(OneDecremented(readline()));
