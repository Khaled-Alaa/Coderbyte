function NextPalindrome(num) {
  if (num < 10) {
    return num + 1;
  }

  let nextNumber = parseInt(("" + (num + 1)).split("").reverse().join(""));
  if (nextNumber === num + 1) {
    return nextNumber;
  }

  return NextPalindrome(num + 1);
}

// keep this function call here
console.log(NextPalindrome(readline()));
