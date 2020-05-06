// Write a JavaScript program to create new string
// with first 3 characters are in lower case from a given string.
// If the string length is less than 3
// convert all the characters in upper case.

function create(str) {
  if (str.length < 3) {
    return str.toUpperCase(); // 코드를 확실히 줄여준다. 글자수가 적으니 substring 할 필요도 없어.
  }
  front_part = str.substring(0, 3).toLowerCase(); // 나는 변수를 생성했는데, 그럴 필요도 없군. 재사용이 자주 일어나는 것도 아니므로
  back_part = str.substring(3, str.length);
  return front_part + back_part; // 'with'이었으므로 단지 앞 글자 3개만 가지고 스트링을 만들라는 이야기는 아니었어.
}

console.log(create("Python"));
console.log(create("Py"));
console.log(create("JAVAScript"));

// function create(str) {
//   if (str.length > 4) { // less than이라고 했을 때 str.length < 3 이어야 함
//     let newStr = str.substring(0, 3).toLowerCase();
//     return newStr;
//   } else {
//     let newStr = str.substring(0, 3).toUpperCase();
//     return newStr;
//   }
// }

// console.log(create("Hello"));
// console.log(create("Hi"));
