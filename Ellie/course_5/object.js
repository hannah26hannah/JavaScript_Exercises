

// 1. Literals and properties 
// const name = 'hannah';
// const age = 27;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// what if this goes long...  ? then we can't think logically anymore.

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const hannah = {
    name: 'hannah',
    age: 27
};

print(hannah);

// how to make object

const obj1 = {}; // curly bracket -> object literal (without class)
const obj2 = new Object(); // -> object constructor syntax 

hannah.hasJob = false;
console.log(hannah); // during runtime, it relys on dynamically programmed language. 나중에 딴 마음 생겨서 object에 추가해도 잘 들어가지. 하지만 모든 프로그래밍 언어가 이걸 공유하는 건 아니야

// 하지만 가능하면 피하도록. 

// 삭제도 가능

delete hannah.hasJob;
console.log(hannah.hasJob); // undefined cuz it doens't contain this property any more.

// 2. Computed properties
// key should be always string
console.log(hannah.name);
console.log(hannah['name']); // I didn't know this could be possible
console.log(hannah[name]); // undefined

hannah['hasJob'] = true;
console.log(hannah.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
};
printValue(hannah, 'age');

// 3. Property value shorthand

const person1 = { name: 'bob', age: 35 };
const person2 = { name: 'seona', age: 10 };
const person3 = { name: 'jia', age: 3 };
const person4 = makePerson('huia', 58);

function makePerson(name, age) { // 마치 template 같지? 
    return { // obj를 return하는 것
        name, // name = name
        age // age = age의 shorthand
    }
}

console.log(person4);

// 4. Constructor Function 
// object가 필요할 때 key와 value가 계속 반복되는데 이걸 어찌 해? -> 함수를 이용해 값만 전달 -> object를 쉽고 유용하게 만들어 하지만 이것도 너무 반복되잖아? 그러면 아래처럼 해

function Person(name, age) {
     // this = {} ; 이 컬리 브라켓이 생략된 거고
    this.name = name;
    this.age = age; // 마치 class 만들 듯이 하면 돼 
    // return this 이것도 생략이 된 거겠지. 
}

const person5 = new Person('mimi', 14); // 호출할 때도 new라는 키워드를 써서 
console.log(person5);

// 5. in operator
// property existence check( key in obj)
console.log('name' in hannah); // true 간단하게 key 가 있는지 없는지 확인 가능
console.log('hasJob' in hannah); // true

console.log('hasSomeone' in hannah); // false
console.log(hannah.random); // undefined

// 6. for.. in vs for .. of
// for (key in obj)
console.clear();

const newObj = {
    straw : 'berry',
    juicy : 'cool',
    justNum : 5455
}

for (key in newObj) {
    console.log(key); // 만약에 'use strict'를 걸었다면 출력이 안 되었을 것이다. 
}

// for (value of iterable) 

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // 출력이야 되겠지만 너무 길지

for (value of arr) {
    console.log(value);
}

// 7. cloning
// object.assign(dest, [obj1, obj2, obj3...])

const user = { name: 'jia', age: '25' };
const user2 = user;

user2.name = 'hannah'; 
console.log(user); // { name: 'jia', age: '25' }; 땡! 여기도 바뀌어있음. 
console.log(user2); // { name: 'hhannah', age: '25' };

// old way

const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3); // 복사 완료 ! 수동적으로 manually 했어야 했다. 

// new way
console.clear();

const user4 = {};
Object.assign(user4, user);
console.log(user4);
//    assign<T, U>(target: T, source: U): T & U;
// 복사하려고 하는 template인 target과 복사하는 source인 U. 

 // 아니면 애초에 리턴값을 할당해도 된다.

 const user5 = Object.assign({}, user);
 console.log(user5);

 // another example

 const fruit1 = { color : 'red' }; 
 const fruit2 = { color : 'blue', size: 'big' };
 const mixed = Object.assign({}, fruit1, fruit2);
 console.log(mixed.color); // [ 'red, 'blue] 배열처럼? 땡 blue 뒤의 최신값이 씌워진다. 
 console.log(mixed.size); // 'big'


