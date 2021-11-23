function HammingDistance(strArr) {
  var first = strArr[0].split("");
  var second = strArr[1].split("");
  var count = 0;

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      count++
    }
  }

 return count; 

}

// keep this function call here 
console.log(HammingDistance(readline()));