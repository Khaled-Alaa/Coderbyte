function LongestWord(sen) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const result = sen.replace(regex, "");
  var x = result.split(" ");
  var longestWord = "";

  for (var i = 0; i < x.length; i++) {
    if (x[i].length > longestWord.length) {
      longestWord = x[i];
    }
  }
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
