// Write a JavaScript program to check from two given integers
// whether one of them is 8
// or their sum or difference is 8.

function check8(a, b) {
  if (a == 8 || b == 8) {
    // == 대신에 =를 썼기 때문에 계속 변수에 할당하는 작업이 어려웠다. 수를 다룰 때는 보다 정확해야 하므로 ==
    return true;
  } else if (a + b == 8 || Math.abs(a - b) == 8) {
    // 뺄셈을 할 때에는 positive integer라는 조건이 주어지지 않았으므로 절댓값을 씌워주는 것이 필요
    return true;
  }
  return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));
