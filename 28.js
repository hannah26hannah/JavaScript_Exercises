//  Write a JavaScript program to check
// whether two given integer values are
// in the range 50..99 (inclusive).
// Return true if either of them are in the said range.

function check(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(check(66, 40));

// 내 솔루션. either는 어느 한 쪽도, 의 뉘앙스를 담고 있음.
// // 따라서 &&가 아닌 ||를
// function check(x, y) {
//   if (x >= 50 && x <= 99 && y >= 50 && y <= 99) {
//     return true;
//   } else return false;
// }

// console.log(check(66, 40));
