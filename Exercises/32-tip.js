// Creates a function that invokes the provided function
// with its arguments transformed.

const tips_overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)));
const square = (n) => n * n;
const double = (n) => n * 2;
const fn = tips_overArgs((x, y) => [x, y], [square, double]);
console.log(fn(25, 5));

// 아직 애로우 방법이 익숙하지 않네. 인프런의 ES6 강의를 다시 듣고 오자.
// 나중에 실행되는 함수는 보통 '콜백 함수'라고 부르지.

setTimeout(function () {
  console.log("settimeout");
}, 1000); 

// 이런 식으로 함수의 첫 번째 인자로 들어가며, 나중에 실행되는 함수를 콜백 함수라 부르지. 문제는 인자로 들어가는 함수가 너무 길다는 것. 

// 이게 축약으로 바뀌게 되어서 이제 아래와 같아졌다.

setTimeout(() => {
  console.log("settimeout arrow");
}, 1000);

// 반환값이 있을 때. 

let newArr = [1, 2, 3, 4, 5].map(function(value, index, object){
    return value * 2;
});

console.log(newArr);

let newArr = [1, 2, 3, 4, 5].map((value, index, object){
    return value * 2;
});

console.log(newArr);