function AlphabetSearching(str) {
  let arr = str.split("");
  let result = [];

  arr.forEach((e) => {
    if (e.match(/[a-z]/gi) && !result.includes(e)) {
      result.push(e);
    }
  });
  return result.length === 26;
}

// keep this function call here
console.log(AlphabetSearching(readline()));
