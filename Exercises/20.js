function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
// 내가 푼 것도 맞음. 솔루션이 보다 짧음.
// function check(x, y) {
//   if ((x < 0 && y < 0) || (x > 0 && y > 0)) {
//     return false;
//   } else if (x < 0 && y > 0) {
//     return true;
//   } else if (x > 0 && y < 0) {
//     return true;
//   }
// }

// console.log(check(1, -20));
