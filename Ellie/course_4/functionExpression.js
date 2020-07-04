
const print = function() {
    console.log('print')
};
print();
const printAgain = print;
printAgain();

// 2 call back function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes');
}
// named function
// better debugging in debugger's stack trees
// recursions 
const printNo = function print() {
    console.log('No');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 3. Arrow Function
// always anonymous
// const simplePrint = function() {
//     console.log("simplePrint");
// }
const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more here
    return a * b;
}

simplePrint();


// 4. IIFE
function hello() {
    console.log('IIFE');
}
hello();
// 하지만 선언과 동시에 호출을 하고 싶다면?

(function hi() {
    console.log('IIFE2');
})();