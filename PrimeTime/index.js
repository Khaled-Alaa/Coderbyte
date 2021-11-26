function PrimeTime(num) {
  if (num === 2) return true;
  var remaining = num % 2;
  if (remaining === 0) {
    return false;
  }
  return true;
}

// keep this function call here 
console.log(PrimeTime(readline()));