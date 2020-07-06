'use strict';

// Array. The first 자료 구조

// 1. Declaration
const arr1 = new Array(); // Object를 생성하는 것처럼 배열을 만들기도 하지만,
const arr2 = [1, 2]; // 이렇게 대괄호를 이용해서 만드는 것이 더 흔하지. 

// 2. Index position

const fruits = ['🍕', '🥗'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]); // commonly used. for the last item

// 3. Looping over an array
// print all fruits 

// fruits.forEach((i in fruits) => console.log(fruits[i])); // ?? 

console.clear();
// a. for loop (also commonly used)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
/**
     * Performs the specified action for each element in an array. 배열 안에서 각 요소를 위해 정해진 어떤 액션을 취한다. 
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * 콜백 함수가 첫 번째 인자가 된다. 밸류 하나 하나마다 이 함수를 해줌 
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// 꼭 이렇게 함수들 읽어보는 습관 가지도록 해!!!!!! 개발 인생을 획기적으로 바꿔준다. 위에 저렇게 물음표가 있으면 optional임. 
// 배열에 있는 값, 그 값을 가리키는 인덱스, 그리고 배열 전체도 전달을 받을 수 있음. 
// 
console.clear();
fruits.forEach((fruit, index, array) => {console.log(fruit, index, array)})
// 보통 array는 잘 받아오진 않아. 
// 그리고 한 줄 정도만 리턴해주는 함수에서는 { } culry bracket도 필요가 없다. 

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍳', '🥪');
console.log(fruits);

// pop: remove an item from the end
// fruits.pop(fruits); <- 이미 fruits 안에서 메소드를 쓰는 건데 인자로 해당 함수를 받아올 필요는 없지. 하지만 출력이 되긴 한다. 
fruits.pop();
fruits.pop(); // 두 번 출력해서 두 번 뒤에서 삭제가 됨. 
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍘')
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits)

// note : shift, unshift are so so so slow than pop and push. why????
// 기존 메모리를 차지하는 아이템은 움직이지 않아도 된다. 하지만 맨 처음부터 데이터를 넣으면 기존의 데이터들은 다른 위치로 이동을 해야 해 그래서 시간이 느려진다. 삭제할 떄도 마찬가지야. 지운 자리에 다른 데이터를 넣어줘서 원상복구를 해야 하지. 배열의 길이가 길면 길수록 이렇게 shift, unshift 계속 반복적으로 해야 하므로 가능하면 shift와 unshift보다는 pop과 push를 사용하는 게 더 좋지. 

// 제일 뒤에서 아이템을 접근하는 건 정말 빠르고 중간에 데이터를 넣고 빠르는 것도 인덱스를 활용하기 때문에 빨라. 하지만 전체의 데이터가 움직여야 한다 하면 더 느릴 수밖에 없다
// big-O나 알고리즘 정렬 설명을 깊게 들어가면 원리를 알 수 있음. 

// splice : remove an item by index position

fruits.push('🍚', '🥟', '🍜', '🍤');
console.log(fruits);
// fruits.splice(1); // 지정한 인덱스부터 모든 데이터를 다 지워. 
fruits.splice(1, 1);
console.log(fruits); 
fruits.splice(1, 1, '🧇', '🍿', '🥚'); // 인덱스 1의 자리에서 1개까지만 지워주고, 그 뒤에 애들을 그 자리에 넣어줘. 만일 두 번쨰 인자의 값을 0으로 해서 아무것도 지우지 않겠다 해도 가능해. 
console.log(fruits); 

// combine two arrays. 
const arr = ['❤', '🧡', '💛'];
const newFruits = fruits.concat(arr);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥚'));
console.log(fruits.indexOf('🥖')); // -1 해당하는 값이 배열 안에 없을 경우에는 -1을 출력해

// includes
console.log(fruits.includes('🥚'));
console.log(fruits.includes('🥖'));

// 6. lastIndexOf
console.clear();
fruits.push('🍤');
console.log(fruits);
console.log(fruits.indexOf('🍤'));
console.log(fruits.lastIndexOf('🍤'));

