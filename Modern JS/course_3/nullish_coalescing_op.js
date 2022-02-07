// 1. null 병합 연산자 ?? (Nullish coalescing operator)
// 구식 브라우저 폴리필 필요

// ❌ Bad Practice
function printMsg(text) {
  let msg = text;
  if (text == null || text == undefined) {
    msg = 'Nothing to display';
  }
}

// ✅ Good Practice
function printMsg(text) {
  const msg = text ?? 'Nothing to display';
}
✨
// default parameter?
function printMsg(text = 'Nothing to display') {
    console.log(text)
}

printMsg('hello'); // 'hello'
printMsg(undefined); // 'Nothing to display'
printMsg(null); // null ---> ✨ default parameter가 출력되는 것이 아니라, null이 그대로 출력된다.
// 즉, undefined일 때만 default parameter가 들어간다. 


// 기존 || 처리의 문제점
function isEnabled(options) {
  return console.log(options.enabled || true);
}

isEnabled({}); // true
isEnabled({ enabled: null }); // true
isEnabled({ enabled: false }); // true 속성 값인 false를 인식하지 못하고 true를 반환하고 있다.

// || 연산자는 좌항이 falsy한 경우 무조건 우항을 택한다. 하지만, 자바스크립트에서는 null, undefined뿐 아니라 false, 0, "", NaN 등 다양한 값을 falsy하게 여긴다.

// 여러 피연산자 중 값이 '확정된' 변수를 찾는다.
// a ?? b 는 a가 null도 아니고, undefined도 아니면 a로 평가된다. 나머지는 b로 평가된다.

// 삼항 연산자로 ?? 연산자와 같은 결과를 표현하면 아래와 같다.
x = a !== null && n !== undefined ? a : b;

let firstName = null;
let lastName = null;
let nickName = 'developer';

console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // developer

// // 2. ??(Nullish Coalescing Operator)와 ||(Logical OR Operator)의 차이
// // || 는 첫 번째 truthy 값을 반환, ??는 첫 번째 defined value를 반환

let hight = 0;
console.log(height || 100); // 100. 0을 falsy 값으로 취급. 따라서 null, undefined를 할당한 것과 동일하게 처리
console.log(height ?? 100); // 0. height가 정확히 null이나 undefined일 경우에만 100

// 즉, Logical OR Operator의 경우 좌항이 falsy 값일 때 우항이 실행된다.
// JavaScript에서 falsy 값은? undefined, null, false, 0, -0, NaN, '', "", ``

// TIP: 0이 할당될 가능성이 있는 기능 개발 시에는 ?? 을 || 대신 사용할 것
// TIP 2 : 연산자 우선순위 5. 낮으므로 사용 시 괄호 유의
// TIP 3 : ??는 &&이나 ||와 함께 사용하지 못한다. -> 괄호로 묶어 해결할 수 있다.
