// 유저가 정의한 이름을 이용해 변수를 만들기 위한 자바스크립트 연습을 써보시라.

// You can define an object with all your user-defined variables.

const var_name = "myVar";
const var_value = "myValue";

var obj = {
  [var_name]: var_value,
};

console.log(obj);
console.log(obj[var_name]);
