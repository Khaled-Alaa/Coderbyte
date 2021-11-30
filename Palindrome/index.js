function Palindrome(str) {
  str = str.replace(/[^a-z]/ig, "").toLowerCase();
  var newStr = str.split("").reverse().join("")
  if (newStr === str) {
    return true
  }
  return false
}

// keep this function call here 
console.log(Palindrome(readline()));