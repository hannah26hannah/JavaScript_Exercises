//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
// 어떤 정수가 100 또는 400을 기준으로 범위가 20 안에 드는지 확인할 것.
// 100 또는 400에서 어떤 정수 x를 뺀다면 그 수의 절댓값은 범위의 값인 20보다 작은 것.

function check(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

console.log(check(10));
