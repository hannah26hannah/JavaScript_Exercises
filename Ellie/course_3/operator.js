// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // "12" 
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3 
// \n\t Tab key

// 2. Numeric operators
console.log(1 + 1); // add 
console.log(1 - 1); // substract 
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = coutner;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
const postDecrement = counter--;

// ++ 연산자와 똑같다

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y // x = x ** y;
x /= y; // x = x / y;

// 5. Comparison operators

// 6. Logical operators: || && !
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value (처음 true가 나오는 곳에서 멈춘다)
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time 쓸데 없이 시간을 낭비하다가..결국 true를 리턴하는 아이 ㅋㅋ
        console.log('😅');
    }
    return true;
}

// && (and)), finds the first falsy value (처음 false가 나오는 곳에서 멈춘다)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time 쓸데 없이 시간을 낭비하다가..결국 true를 리턴하는 아이 ㅋㅋ
        console.log('😅');
    }
    return true;
}
// 이때, ||와 && 모두 연산이 많이 들어가야 하는 함수나 expression을 제일 앞에다가 두면, 당연히 코드가 너무 시간을 잡아 먹겠지! 당연히 simple value들을 앞에 배치한다. 

// often used to compress long if-statement
// nullableObject && nullableObject.something 
//if (nullableObject != null) {
//   nullableObject.something;
// }
// 나중에 간단하게 코드를 바꿔나갈 때 도움이 됨

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by referecne 
const hannah1 = { name: 'hannah'};
const hannah2 = { name: 'hannah'};
const hannah3 = hannah1;
console.log(hannah1 == hannah2);
console.log(hannah1 === hannah2);
console.log(hannah1 === hannah3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false);
console.log(0 == false); // true
console.log(0 === false); // true
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // typeof null : object이므로, false
console.log(null === undefined); // true.. ? 

// 8. Conditional operators: if
// if, else if, else

const name = 'hannah';
if (name === 'hannah') {
    console.log('welcome, hannah');
} else if (name === 'coder') {
    console.log('you are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator : ?
// condition ? value : value2;

console.log(name === 'hannah' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declatarion. for condition 안에 let을 선언한 상태이지
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// cpu에 좋지않아. 되도록 피하는 게 좋겠지. 
