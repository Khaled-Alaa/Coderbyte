function DistinctCharacters(str) {
  let mySet = new Set(str);
  return mySet.size >= 10 ? true : false;
}

// keep this function call here
console.log(DistinctCharacters(readline()));
