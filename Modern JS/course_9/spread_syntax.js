// 3. Spread Syntax (전개 문법)

const item = { type: 'shirt', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Practice
item['price'] = detail.price;

// ✅ Good Practice
const shirt1 = Object.assign(item, detail);

// ✅ Good Practice
const shirt2 = { ...item, ...detail };

// Possible syntax
const shirt3 = { ...item, ...detail, price: 40 }; // value, 40 overrides original value

// ... parameter나 arugments는 인수를 배열로 가져오는 방법이었다면 아래는 그 반대의 방법이다.

// Math.max()는 인수로 받은 숫자 중 가장 큰 숫자를 반환한다.
console.log(Math.max(3, 5, 1)); // 5

// 만일 배열 [3, 5, 1]이 있고, 이 배열을 대상으로 Math.max를 호출한다고 가정하면, Math.max() 는 배열이 아닌 숫자 목록만을 인수로 하므로, NaN 에러를 발생시킬 것이다.

// 배열의 길이를 알고 있다면, 수동으로 아래처럼 만들 수는 있을 것이다.
Math.max(arr[0], arr[1], arr[2]);

// 그러나 배열의 길이를 알 수 없거나, 배열의 길이가 너무 길거나, 아예 빈 배열일 경우에는 코드가 지저분해지거나 짤 수 없는 코드가 될 것이다.

// ... 를 사용하므로 rest parameter와 비슷해보이지만, spread syntax는 rest parameter와 반대의 역할을 한다. 함수 호출 시 ... arr를 사용하면 iterable object arr가 인수 목록으로 확장된다.

let arr = [3, 4, 5, 7];
console.log(Math.max(...arr)); // 7

// Multiple iterable objects as parameter
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// mix usage with normal parameter
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// usage when merging arrays
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];
console.log(merged); // 0, 3, 5, 1, 2, 8, 9, 15 (순서대로 합쳐진다.)

// It doesn't have to be an Array! iterbal object is fine either

let str = 'Hello';
console.log([...str]); // H, e, l, l, o

// Array.from Method (converts string-like iterable object into an array)
let str = 'Hello';
console.log(Array.from(str)); // H, e, l, l, o

// ❕ Array.from(obj)는 array-like object와 iterable object 모두에서 사용 가능. 하지만 spread syntax는 iterable object에만 사용할 수 있다. 그래서 보통은 Array.from이 더 보편적으로 사용된다.
