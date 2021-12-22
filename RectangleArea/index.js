function RectangleArea(strArr) {
  var coords = strArr.join(" ").replace(/[()]/g, "").split(" ");

  var x1 = coords[2] - coords[0];
  var x2 = coords[4] - coords[2];
  var x3 = coords[6] - coords[4];
  var x = Math.max(x1, x2, x3);

  var y1 = coords[3] - coords[1];
  var y2 = coords[5] - coords[3];
  var y3 = coords[7] - coords[5];
  var y = Math.max(y1, y2, y3);

  return x * y;
}

// keep this function call here
console.log(RectangleArea(readline()));
