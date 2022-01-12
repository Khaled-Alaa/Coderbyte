function DifferentCases(str) {
  let newStr = str.toLowerCase().replace(/\W/g, " ");
  let arrStr = newStr.split(" ");
  let result = [];

  for (let i = 0; i < arrStr.length; i++) {
    result.push(arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1));
  }

  return result.join().replace(/\,/g, "");
}

// keep this function call here
console.log(DifferentCases(readline()));
