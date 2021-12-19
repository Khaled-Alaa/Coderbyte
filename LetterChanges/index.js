function LetterChanges(str) {
  var arr = [];
  var regex = /^[a-zA-Z]*$/;
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelChar = "";

  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      const nextLetter = String.fromCharCode(
        str[i].charCodeAt(str[i].length - 1) + 1
      );
      if (vowels.includes(nextLetter)) {
        vowelChar = nextLetter.toUpperCase();
        arr.push(vowelChar);
      } else {
        arr.push(nextLetter);
      }
    } else {
      arr.push(str[i]);
    }
  }

  return arr.join("");
}

console.log(LetterChanges(readline()));
