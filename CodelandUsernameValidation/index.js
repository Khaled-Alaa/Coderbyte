function CodelandUsernameValidation(str) {
  if (str.length <= 4 || str.length >= 25) {
    return false
  }
  if (str[str.length - 1] == "_") {
    return false
  }
  if (!/^[a-zA-Z]*$/.test(str.charAt(0))) {
    return false
  }
  if(!/^\w+$/.test(str)){
    return false
  }
  return true
}

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));