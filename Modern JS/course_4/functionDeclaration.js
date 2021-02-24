// 1.  local variable
function showMsg() {
    let msg = 'hello'; // local
    console.log(msg);
}

showMsg();
console.log(msg); // ReferenceError: msg is not defined

// 2. outer variable
// 2-1. Access
let userName = 'hannah';
function showMsg() {
    let msg = `Hello, ${userName}`
    console.log(msg);
}
showMsg(); // hello, hannah

// 2-2. Modification
let userName = 'Jeong';
function showMsg() {
    userName = 'Hannah';
    console.log(userName);
}
console.log(userName); // Jeong
showMsg(); // Hannah
console.log(userName); // Hannah

// outer variable can be used when there is no local variable.

// 2-3. 외부 변수와 동일한 이름의 변수 선언
let userName = 'hannah';
function showMsg() {
    let userName = 'Jeong';
    console.log(`Hello, ${userName}`) 
}
showMsg(); // Hello, Joeng
console.log(userName); // hannah

// 3. Parameter
function showMsg(from, next) {
    console.log(`${from} : ${next}`)
}
showMsg('Ann', 'Hello'); // Ann : Hello

function showMessage(from, text) {
    from = `* ${from} *`
    console.log(`${from} : ${text}`)
}
let from = 'Ann';
showMessage(from, 'Hello'); // * Ann * : Hello
console.log(from); // Ann

// // outer 'from' is not modified

// // 4. Default Value
showMessage('Julian') // * Julian * : undefined

function showMessage(from, text = 'no text given') {
    console.log(`${from} : ${text}`);
}
showMessage('Mary'); // Mary : no text given

function showAnotherMessage(from, text = anotherFunc()) {
    // text 값 존재하지 않으면, anotherFunc() 호출
    // anotherFunc()의 반환 값이 text의 값이 됨.
}

// JavaScript에서는 함수가 호출될 때마다 매개변수 기본 값을 평가한다. 

// 4-2. Another way to set default value of parameter
function showMessage(text) {
    if (text === undefined) {
        text = 'emptry string'
    }
    console.log(text)
}
showMessage(); // emptry string

function showAnotherMsg(text) {
    text = text || 'emptry string' // 매개변수가 생략되었거나 빈 문자열이 넘어오면 변수에 'emptry string'이 할당된다.
}

// 4-3. nullish coalescing operator ?? (ES2020)
function showCnt(count) {
    console.log(count ?? 'unknown')
}
showCnt(0); // 0
showCnt(null); // unknown // unknown
showCnt();

// 5. return value
// 실행 흐름은 지시가 return을 만나면 함수 실행이 즉시 중단되며, 함수를 호출한 곳에 값을 반환한다. 
// 지시자 return만 명시하는 것도 가능하다. 
function showMovie(age) {
    if (!checkAge(age)) { return; }
    console.log('playing..');
}
// return 문이 없거나, return 지시자만 있거나 -> undefined를 반환

// 6. function Naming
// getAge()는 나이를 얻어오는 함수만 수행한다. 나이를 출력해주는 함수는 이곳에 포함하지 않는 것이 좋다. 
// createForm() form을 만들고 이를 반환하는 동작이 깔끔하다. 
// 접두어, 동사 활용, 팀원 내  공유되는 컨벤션을 따를 것.
// self-describing code

// mission

function checkAge(age) {
    if (age>18) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?')
    }
}

// if 문 없이 동일 동작하는 함수를 한 줄로 표현
// 1. 물음표 연산자 ? 를 사용해 본문을 작성

function checkAge(age) {
    return (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?")
}

// 2. || 연산자를 사용해 본문을 작성
function checkAge(age) {
    return (age > 18) || confirm("보호자의 동의를 받으셨나요?")
}

// mission 2
// a, b 중 작은 값을 반환해주는 함수 min(a, b)를 만들기
function min(a, b) {
    return a > b ? b : a;
}

// mission 3 
// x의 n 제곱을 반환해주는 함수, pow(x, n)의 인수를 프롬프트 대화상자를 띄워 사용자로부터 제공받도록 한다.

function pow(x, n) {
    let x = prompt('x?');
    let n = prompt('n?'); 
    
    if (n < 1) {
        alert(`${n}은 양의 정수이어야 합니다`)
    } else {
        alert(Math.pow(x, n);)
    }
}