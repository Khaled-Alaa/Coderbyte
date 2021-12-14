function DivisionStringified(num1, num2) {
  var result = Math.round(num1 / num2);
  result = result.toString();

  if (result.length <= 3) {
    return result
  }

  result = result.split(' ');
  result[0] = result[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return result.join('.');
}

// keep this function call here 
console.log(DivisionStringified(readline()));