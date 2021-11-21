function ThreeFiveMultiples(num) {
  if (num <= 3) return 0

  var arr = []
  for (var i = 1; i < num; i++) {
    arr.push(i)
  }

  var container = []

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 3) === 0 || (arr[i] % 5) === 0) {
      container.push(arr[i])
    }
  }

  var sum = 0
  for (var i = 0; i < container.length; i++) {
    sum += container[i]
  }
  var result = sum

  return result
}

// keep this function call here 
console.log(ThreeFiveMultiples(readline()));