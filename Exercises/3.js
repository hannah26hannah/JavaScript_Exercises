// get the current date in this form: mm-dd-yyyy

const p = document.querySelector("p");
const d = new Date();

const date = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();

//조건문을 넣은 함수를 만들기
// function dateWithZ(date) {
//   if (date < 10) {
//     return `0${date}`;
//   } else {
//     return date;
//   }
// }

// function monthWithZ(month) {
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// }
// p.innerHTML = `${dateWithZ(date)}-${monthWithZ(month)}-${year}`;

// 삼항연산자로 코드 줄이기
// p.innerHTML = (date < 10 ? "0"+date : date) + "-" + (month < 10? "0"+month : month) + "-" +year
//하지만 코드가 예뻐보이지 않는다는 단점이.. 이걸 ES6에서 도입된 백틱을 이용해 처리해볼까. 이걸 무슨 리터럴이라 부르던데

p.innerHTML = `${date < 10 ? "0" + date : date}-${
  month < 10 ? "0" + month : month
}-${year}`;

// 이걸로 더 줄일 수 있게 됐다. 백틱 안에 ${}을 쓴 경우라면 그 안에 또 ${}를 쓸 수 없음을 알게 됨!

// 정답지 확인하고 놓친 것 : Month+1을 안 해줌. const  month에 +1만 해주면 됨.
