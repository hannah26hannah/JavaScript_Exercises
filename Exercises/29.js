// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
// Write a JavaScript program to check
// whether three given integer values are
// in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.

function check(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  }
  // else
  //   return false
  // 이 부분은 굳이 필요하지 않았기에 생략했더라.
}

console.log(check(5, 9, 100)); // false
