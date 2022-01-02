function DashInsert(str) {
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(str), myFunc);
  var arr = [];
  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] % 2 === 1 && intArr[i + 1] % 2 === 1) {
      arr.push(intArr[i]);
      arr.push("-");
    } else {
      arr.push(intArr[i]);
    }
  }
  return arr.join().replace(/\,/g, "");
}

// keep this function call here
console.log(DashInsert(readline()));
