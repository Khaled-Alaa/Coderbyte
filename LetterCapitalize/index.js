function LetterCapitalize(str) {
  var capitalizeArr = [];
  var char = "";

  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      char = str[0].toUpperCase();
      capitalizeArr.push(char);
    } else if (str[i - 1] === " ") {
      char = str[i].toUpperCase();
      capitalizeArr.push(char);
    } else {
      capitalizeArr.push(str[i]);
    }
  }

  return capitalizeArr.join("");
}

// keep this function call here
console.log(LetterCapitalize(readline()));
