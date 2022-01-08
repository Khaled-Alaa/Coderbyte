function NumberAddition(str) {
  let newStr = str.replace(/[^0-9,.]+/g, " ");
  let arrNewStr = newStr.split(' ').map(x => +x);
  return arrNewStr.reduce((sum, item) => sum + item)
}

// keep this function call here 
console.log(NumberAddition(readline()));