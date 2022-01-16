function RemoveBrackets(str) {
  let bracket = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] === ")") {
      bracket = bracket + 1;
    } else if (str[i] === "(") {
      bracket = bracket + 1;
    } else {
      bracket = bracket - 1;
    }
  }
  return Math.abs(bracket);
}

// keep this function call here
console.log(RemoveBrackets(readline()));
