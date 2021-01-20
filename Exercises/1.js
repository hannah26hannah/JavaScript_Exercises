// setInterval 함수로 1초마다 업데이트되도록 설정.
const cl = setInterval(function () {
  const div = document.querySelector("div"); // DOM 구조 객체화하기
  const span1 = document.querySelector(".day");
  const span2 = document.querySelector(".time");

  // days 배열 생성
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentDate = date.getDay();
  const day = days[currentDate];
  const time = date.getTime();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // if - else 조건문으로 AM, PM 구문 제어하기. 조건문 하나로 hours까지 나타내기. 사용하고자 하는 변수를 인자로 받기
  function AMPM(hours) {
    if (hours > 12) {
      return `${hours - 12} PM`;
    } else {
      return `${hours} AM`;
    }
  }

  span1.innerHTML = `Today is : ${day}.`;
  // hours를 인자로 써주는 것을 잊지 말기.
  span2.innerHTML = `Current Time is : ${AMPM(
    hours
  )} : ${minutes} : ${seconds}`;
}, 1000);
