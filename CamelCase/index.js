function CamelCase(str) {
  let newStr = str.toLowerCase().replace(/\W/g, " ");
  let arrStr = newStr.split(" ");
  let result = [];
  result.push(arrStr[0]);

  for (let i = 1; i < arrStr.length; i++) {
    result.push(arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1));
  }

  return result.join().replace(/\,/g, "");
}

// keep this function call here
console.log(CamelCase(readline()));
