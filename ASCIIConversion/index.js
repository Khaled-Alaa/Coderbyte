function ASCIIConversion(str) {
  let arr = str.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      result.push(" ");
    } else {
      let ascii = arr[i].charCodeAt(0);
      result.push(ascii);
    }
  }
  return result.join().replace(/\,/g, "");
}

// keep this function call here
console.log(ASCIIConversion(readline()));
