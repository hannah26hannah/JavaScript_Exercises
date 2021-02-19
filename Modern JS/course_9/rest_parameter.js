// 1. Rest parameter ...

// Math.max(arg1, arg2, ... , argN) 인수 중 가장 큰 수를 반환하는 이 함수처럼, JavaScript의 내장 함수는 인수의 개수에 제한을 두지 않는다. 
// 그러나 함수의 정의 방법과 무관하게 넘겨주는 인수의 개수에는 제약이 있다. 

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

// 위 예시에서는 실제로 필요한 인자보다 3개 더 '여분의' 인자를 전달했음에도, 에러가 발생하지는 않았다. 이때 rest parameter를 이용해 여분의 인자를 담을 배열을 함수 선언부에 포함시킬 수 있다. 즉, ... (three dots) parameter는 나머지 매개변수를 모아서 ...<배열-dot 뒤에 배열 이름이 온다.>에 넣는 것을 의미한다. 

function sumAll(...args) { // "args"가 배열 이름이 된다. 
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

// 위 예제에서는 모든 인수가 배열 args에 담겨 있다. 

function showName(firstName, lastName, ...names) {
    console.log(`${firstName} ${lastName}`); // Hannah Yoo

    console.log(names[0]); // Seoul
    console.log(names[1]); // citizen
    console.log(names.length) // 2
}

showName("Hannah", "Yoo", "Seoul", "citizen");

// 위 예제에서는 앞 두 개의 변수 firstName, lastName은 names 배열에 포함되지 않는다. 
// ❕ ... parameter는 항상 마지막에 위치해야 한다. 
