// Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30
// otherwise return 20 and
// if two numbers are same return 40.

function check(x, y, z) {
  if (x == y && y == z && z == x) {
    return 30;
  }
  if (x == y || y == z || z == x) {
    return 40;
  } else {
    return 20;
  }
}

console.log(check(1, 1, 1)); // 30
console.log(check(1, -1, 3)); // 20
console.log(check(2, 2, 0)); // 40

// 정답과 똑같다. 문제에서 언급된 순서에 따라 flow를 구성해서는 안 되는 거였어.
