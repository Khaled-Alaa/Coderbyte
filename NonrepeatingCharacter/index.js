function NonrepeatingCharacter(str) {
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return null;
}

// keep this function call here
console.log(NonrepeatingCharacter(readline()));
