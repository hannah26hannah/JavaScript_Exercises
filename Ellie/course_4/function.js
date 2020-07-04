'use strict';

function log(msg) {
	console.log(msg);
}

log("Hello, It\'s me");

// 2. parameters

function changeName(obj) {
    obj.name = 'coder';
}
const hannah = { name: 'hannah' };
changeName(hannah);
console.log(hannah);

// 3. default parameters
function showMessage(message = 'hi', from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage();

// 4. Rest Parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg)
    }

    args.forEach((arg) => console.log(arg));
}

printAll('hello', 'coding', 'monitor');

// 5. local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message); 
    console.log(globalMessage);
}
printMessage();
// console.log(message);

// 6. return
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); 
console.log(`sum: ${sum(1, 2)}`);

// 7. early return
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic... 
}

// 1. Function expression 