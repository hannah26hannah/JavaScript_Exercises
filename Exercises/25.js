//Write a JavaScript program to check
// whether a given positive number is a multiple of 3
// or a multiple of 7.

function check(num) {
  // 나머지가 0임을 나타내고 싶다면 % 퍼센테이지를, 몫을 나타내고 싶었다면 / 일반 나눗셈 기호
  if (num % 3 == 0 || num % 7 == 0) {
    // 또 괄호를 어떻게 여닫는지도 오류 생성에 영향을 줌
    return true;
  } else {
    return false;
  }
}

console.log(check(23));
