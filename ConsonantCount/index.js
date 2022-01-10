function ConsonantCount(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var arr = str
    .replace(/[^A-Za-z']/g, "")
    .toLowerCase()
    .split("");
  var count = 0;
  var item;

  vowels.forEach((element) => {
    item = arr.filter((ele) => ele === element);
    if (item.length > 0) {
      count = count + item.length;
    }
  });
  return arr.length - count;
}

// keep this function call here
console.log(ConsonantCount(readline()));
