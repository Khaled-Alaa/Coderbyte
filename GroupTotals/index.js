function GroupTotals(strArr) {
  let arrOfSum = [];
  let item = [];

  for (let i = 0; i < strArr.length; i++) {
    item = strArr[i].split(":");
    if (arrOfSum.length > 0) {
      let exist = arrOfSum.find((element) => element[0] === item[0]);
      if (exist) {
        let index = arrOfSum.findIndex((element) => element[0] === item[0]);
        exist[1] = exist[1] + parseInt(item[1]);
        arrOfSum.splice(index, 1, exist);
      } else {
        item[1] = parseInt(item[1]);
        arrOfSum.push(item);
      }
    } else {
      item[1] = parseInt(item[1]);
      arrOfSum.push(item);
    }
  }

  arrOfSum = arrOfSum.filter((k) => k[1] !== 0).sort();
  return arrOfSum.join(" ").replace(/,/g, ":").replace(/ /g, ",");
}

// keep this function call here
console.log(GroupTotals(readline()));
