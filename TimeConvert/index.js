function TimeConvert(num) {
  var min  = num % 60
  var hoursInmin = num - min
  var hours = hoursInmin / 60;
  
  return (hours + ":" + min)


}

// keep this function call here 
console.log(TimeConvert(readline()));