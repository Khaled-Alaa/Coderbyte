function BracketMatcher(str) {
  var numOfOpen = 0;
  // var numOfClose = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "(") {
      numOfOpen++
    }
    if (str.charAt(i) == ")") {
      numOfOpen--
    }
    if (numOfOpen < 0) { return 0 }
  }
  if (numOfOpen > 0) {
    return 0
  }
  return 1
}

// keep this function call here 
console.log(BracketMatcher(readline()));