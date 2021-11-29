function AlphabetSoup(str) {
  var arr = str.split('');
  var sorting = arr.sort();
  return sorting.join('')
}

// keep this function call here 
console.log(AlphabetSoup(readline()));