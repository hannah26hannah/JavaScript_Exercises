// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// 주어진 숫자와 13과의 차이점을 구하는 프로그램을 만들어라. 만일 차이가 13보다 크다면 the absolute difference를 두 배로 만들 것. given number는 정수여야만 하나? 여기는 num이기만 하면 될 것 같은데, 이 차이가 꼭 똑 떨어지는 수여야만 할 것이다.

// absolute number에 너무 집착한 나머지.. .
// function do(){
//     const given = document.getElementById("given").value;
//     if(given > 26){
//       const absolute = given.split(".").pop()
//       document.getElementById("result").innerHTML = absolute * 2 ;
//     }
//   }

// the absolute difference는 절댓값 차이라고 읽으면 될 것.
function difference(n) {
  if (n >= 13) return 13 - n;
  // 수행할 코드가 한 줄이라면 중괄호를 쓰지 않아도 되네.
  else return (n - 13) * 2;
}
console.log(difference(32));
console.log(difference(11));
