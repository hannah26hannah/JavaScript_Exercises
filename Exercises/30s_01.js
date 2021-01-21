// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//#Source https://bit.ly/2neWfJ2 30seconds of code

const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

  // every() 배열 안 모든 주어진 요소가 주어진 판별 함수를 통과하는지 테스트 후 boolean 값 리턴, 빈 배열에서 호출할 경우 무조건 true를 반환한다. 

console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // 비교 대상이 되는 source 인수의 key인 hair와 beard는 비교 주체인 obj의 속성에 포함된다. -> true


console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false

// Object.keys(obj) 메소드는 주어진 오브젝트의 셀 수 있는 속성 이름을 배열로 반환한다. iterated in the same order that a normal loop would.

const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2'] 

const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100'] 



const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// Object.prototype.hasOwnProperty() 메소드는 boolean 값을 반환하며, 오브젝트가 특정한 속성을 자기 자신의 속성으로 갖는지를 판별한다.

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// expected output: true

console.log(object1.hasOwnProperty("toString"));
// expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// expected output: false
