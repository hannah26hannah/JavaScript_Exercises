'use strict';

// 1. Producer
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    // doing something heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
    resolve('ellie');
      // reject(new Error('No network')); // JS 가 제공하는 오브젝트 중 하나
    }, 2000)
});

// 2. Consumers: then, catch, finally 값을 받아올 수 있다. 
promise //
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => { // 성공하든 실패하든 무조건 호출되어서 인자를 받지 않음
    console.log('finally');
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

    getHen() // prettier 때문에 한 줄로 정렬이 되면 이렇게 주석 표시를 두 개 붙여서 
    .then(hen => getEgg(hen)) 
    .catch(error => { // error가 나서 다른 값으로 대체해주고 싶어 에러가 날 만한 상황 바로 뒤에 catch 작성해주고 이걸 하지 않으면 전체적인 promise chain 자체가 무너져!
        return '🧀';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log); // 🧀 => 🍳

    // 이 코드는 .then(getEgg) 이렇게 깔끔하게 줄여 쓸 수 있다. 한 가지만 받아서 전달할 경우에만