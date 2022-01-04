function GCF(arr) {
  let maxNo = Math.max(...arr);

  for (let i = maxNo; i > 0; i--) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      return i;
    }
  }
}
// keep this function call here
GCF(readline());
