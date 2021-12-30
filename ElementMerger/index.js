function ElementMerger(arr) {
  const newArr = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let dif = arr[i] - arr[i + 1];
      dif = Math.abs(dif);
      newArr.push(dif);
    }
    return ElementMerger(newArr);
  }
  if (arr.length === 1) {
    return arr.join();
  }
}

// keep this function call here
console.log(ElementMerger(readline()));
