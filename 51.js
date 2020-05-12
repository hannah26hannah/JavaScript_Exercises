// Write a JavaScript program to convert a given number to hours and minutes.

function time(num) {
  const h = num % 60;
  const m = num / 60;

  return `${num}은 ${h}시간 ${Math.ceil(m)}분입니다.`;
}

console.log(time(60));
console.log(time(130));
console.log(time(400));
console.log(time(0));

// 아래는 솔루션

function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

// 수정한 코드

// Write a JavaScript program to convert a given number to hours and minutes.

function time(num) {
  const h = num / 60; // 몫
  const m = num % 60; // 나머지

  return `${num}은 ${Math.floor(h)}시간 ${m}분입니다.`; // Math.floor 여야만 나머지 부분에 대한 정보를 삭제할 수 있어.
}

console.log(time(60));
console.log(time(130));
console.log(time(450));
console.log(time(0));
