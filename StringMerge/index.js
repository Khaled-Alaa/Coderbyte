function StringMerge(str) {
  let arrStr = str.split("*");
  let first = arrStr[0];
  let second = arrStr[1];

  let result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }

  return result.join("");
}

// keep this function call here
console.log(StringMerge(readline()));
