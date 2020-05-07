// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

function number_order(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  } else if (z > y) return "Soft mode";
  else return "Undefinded";
}

console.log(number_order(10, 15, 31));
console.log(number_order(24, 22, 31));
console.log(number_order(50, 21, 15));

// 문제가 존나 이해도 안 가고 왜 필요한지 모르겠음.. 나중에 다시 볼 일이 있으면 오고 아님 무시하자.
