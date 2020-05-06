// Write a JavaScript program
// to find the larger number
// from the two given positive integers,
//the two numbers are in the range 40..60 inclusive.

function check(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    if (a === b) {
      return "Numbers are the same"; // 두 수가 같을 거란 전제를 빼먹음...
    }
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return false;
  }
}

console.log(check(44, 59));
console.log(check(59, 44));
console.log(check(59, 90));
