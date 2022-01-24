function BitwiseOne(strArr) {
  let first = strArr[0].split("");
  let second = strArr[1].split("");
  let final = [];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      final.push(first[i]);
    } else {
      final.push("1");
    }
  }

  return final.join("");
}

// keep this function call here
console.log(BitwiseOne(readline()));
