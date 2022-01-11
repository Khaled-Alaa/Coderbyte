function EquivalentKeypresses(strArr) {
  let word1 = strArr[0].replace(/,/g, "").replace(/.?-B/g, "");
  let word2 = strArr[1].replace(/,/g, "").replace(/.?-B/g, "");

  return word1 === word2;
}

// keep this function call here
console.log(EquivalentKeypresses(readline()));
