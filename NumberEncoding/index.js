function NumberEncoding(str) {
  let regex = /^[a-zA-Z]+/;
  var arrStr = str.split('');
  var indexs = [];

  for (var i = 0; i < arrStr.length; i++) {
    if (regex.test(arrStr[i])) {
      indexs.push(arrStr[i].charCodeAt() - 96);
    } else {
      indexs.push(arrStr[i])
    }
  }

  var result = indexs.join().replace(/\,/g, "")
  return result;
}

// keep this function call here 
console.log(NumberEncoding(readline()));