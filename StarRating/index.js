function StarRating(str) {
  var number = Math.round(Number(str) * 2)
  number = number / 2

  var rating = ["empty", "empty", "empty", "empty", "empty"];

  for (var i = 0; i < number; i++) {
    if (isFloat(number) && i === Math.floor(number)) {
      rating[i] = "half"
    } else {
      rating[i] = "full"
    }
  }

  var result = rating.join().replace(/\,/g, " ")

  return result;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

// keep this function call here 
console.log(StarRating(readline()));