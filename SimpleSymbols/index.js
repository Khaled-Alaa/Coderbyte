function SimpleSymbols(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) !== null) {
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
}

// keep this function call here
console.log(SimpleSymbols(readline()));
