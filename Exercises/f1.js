// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//#Source https://bit.ly/2neWfJ2
const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false

// Object.keys(obj) 메소드는 주어진 오브젝트의 셀 수 있는 속성 이름을 배열로 반환한다. iterated in the same order that a normal loop would.

const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2'] 이 경우에는 인덱스가 속성 이름이 되는군

const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100'] 이런 경우에는 키 이름이 순서대로 나열이 되는군

// The every() 메소드는 배열 안의 모든 요소가 함수에 제공된 테스트에 통과하는지를 검사하고 불린 밸류를 반환한다.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// Object.prototype.hasOwnProperty() 메소드는 불린 값을 반환하며, 오브젝트가 특정한 속성을 자기 자신의 속성으로 갖는지를 판별한다.

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// expected output: true

console.log(object1.hasOwnProperty("toString"));
// expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// expected output: false
