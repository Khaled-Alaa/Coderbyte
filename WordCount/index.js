function WordCount(str) {
  var countSpaces = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      countSpaces++
    }
  }

  var nomOfWords = countSpaces + 1
  return nomOfWords;

}

// keep this function call here 
console.log(WordCount(readline()));