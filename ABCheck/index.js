function ABCheck(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if ([i + 4] < str.length) {
      if (str[i] === "a" && str[i + 4] === "b" || str[i] === "b" && str[i + 4] === "a") {
        return true;
      }
    }
  }
  return false;
}

// keep this function call here 
console.log(ABCheck(readline()));