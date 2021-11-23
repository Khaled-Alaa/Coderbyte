function OtherProducts(arr) {
  var newArr = [];
  var item = 0;
  var multi = 0;
  
  for (var i = 0; i < arr.length; i++) {
    multi = arr.reduce((a, b) => a * b);
    item = multi / arr[i];
    newArr.push(item);
  }
  newArr = newArr.join().replace(/\,/g, "-")

  return newArr
}

// keep this function call here 
console.log(OtherProducts(readline()));