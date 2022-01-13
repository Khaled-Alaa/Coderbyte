function HDistance(strArr) {
  let string1 = strArr[0].split("");
  let string2 = strArr[1].split("");
  let count = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      count = count + 1;
    }
  }

  return count;
}

// keep this function call here
console.log(HDistance(readline()));
