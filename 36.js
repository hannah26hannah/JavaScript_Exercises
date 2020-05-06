// Write a JavaScript program
// to check whether the last digit of the three given positive integers
// is same.

function last_digit(x, y, z) {
  // 3개의 숫자를 파라미터로 받아야 하고,
  if (x > 0 && y > 0 && z > 0) {
    // 그 숫자들은 모두 양수이므로 조건을 단다
    return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
    // 어떤 수를 10으로 나누면 그 나머지는 늘 마지막 숫자와 일치하는군.
  } else return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));
