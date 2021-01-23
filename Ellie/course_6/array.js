'use strict';

// Array. The first 자료 구조

/*
순서가 있는 컬렉션이 필요할 때, 객체를 사용하고자 한다면 순서와 관련된 메서드가 없거니와 객체 자체가 순서를 고려하지 않고 만들어진 자료 구조이므로 적합하지 않다. 또한, 기존 프로퍼티 사이에 새로운 프로퍼티를 삽입하는 행위도 불가하다. 순서 있는 컬렉션을 저장할 때 쓰는 자료구조가 배열이다. 


자바스크립트의 배열은 타입이 고정되어 있지 않다. 같은 배열이라도, 원소 값의 타입은 다를 수 있다. 또한, 자바스크립트의 배열은 동적이다. 필요에 따라 크기를 줄였다 늘릴 수 있다. 배열을 생성하거나, 크기가 변경되어 재할당할 때도 배열 크기 선언이 필요 없다. 

자바스크립트 배열은 자바스크립트 객체의 특별한 형태이며, 배열의 인덱스는 프로퍼티 이름인데 정수인 것이다. 일반적으로 배열은 객체 프로퍼티를 통해 원소에 접근하는 것보다 정수 첨자를 통해 원소 접근하는 것이 더 빠르게 설계되어 있다. 배열은 `Array.prototype`의 프로퍼티를 상속받는다.
*/

// 1. Declaration
const arr1 = new Array(); // Array() 생성자를 이용한다. 
const arr2 = [1, 2]; // 배열 리터럴. 또 다른 배열 리터럴을 포함하거나, 객체 리터럴을 포함할 수 있다. 
const arr3 = [ , ,] // 만일 배열 리터럴에서 빠진 부분이 있다면, 해당 부분 원소 값은 undefined가 된다. 
// 여기서 두 원소 값은 모두 undefined이다. 배열 리터럴 문법은 마지막 원소 다음에 쉼표를 추가할 수 있다.

// ✔ 1-1. Array() 생성자를 이용해 배열을 만드는 세 가지 방법
// 인자 없이 호출하기
const a = new Array(); // 빈 배열을 생성하고, 이렇게 생성된 배열은 배열 리터럴 []과 동일하다.

// 1-2. 배열의 길이를 의미하는 숫자를 인자로 넣는다.
const a = new Array(10); // 배열에 저장될 원소 크기를 알고, 미리 공간을 할당할 때 쓰는데, 이때 배열에 
// 어떤 값도 저장되지 않고, 배열의 인덱스 프로퍼티 값("0", "1", ..)도 존재하지 않는다.

// 1-3. 두 개 이상의 원소 또는 숫자가 아닌 원소 값 하나를 명시적으로 지정
const a = new Array(5, 4, 3, 2, 1, "test"); // 이 경우 리터럴 사용이 훨씬 간편하다. 

// 요소에는 여러가지 자료형이 올 수 있다. 
let arr = [{name: "hannah"}, true, function() {console.log("yay!")}];
arr[2](); // "yay!" 인덱스가 2인 요소(즉, 여기서는 함수)를 실행한다. 

// 배열의 마지막 요소는 객체처럼 trailling comma를 가질 수 있다. 모든 줄의 생김새가 동일하니, 요소를 넣거나 빼는 데 유리하다. 

// 2. Index position
/* ✔ 배열의 각 원소에 접근할 때는 [] 연산자를 사용한다. 배열은 객체의 특별한 종류로, 배열의 [] 구문은,
객체 프로퍼티 접근 때 쓰는 []과 동일하게 작동한다. JS는 사용자가 명시한 숫자 배열 인덱스를 문자열 형태로 
바꿔서 프로퍼티 이름으로 사용하는 것이다. 

✔ 배열의 인덱스, 객체 프로퍼티 이름을 올바르게 구분하라. 모든 인덱스 값은 프로퍼티 이름이나, 프로퍼티 이름은 2^32-1 사이의
정수여야 인덱스가 될 수 있다. 모든 배열은 객체이므로, 어떤 이름의 프로퍼티라도 자유롭게 만들 수 있지만,
배열에서는 프로퍼티 중 인덱스를 활용하면 length 프로퍼티 값이 자동으로 갱신된다. 
배열 첨자로 양의 정수가 담긴 문자열을 사용하면, 일반적으로 프로퍼티가 아닌 배열 인덱스로 쓰인다 (소수점 아래가 없는, 
부동 소수점도 마찬가지.) 그러나 음수나 정수가 아닌 것들을 사용하면 숫자는 문자열로 치환되고, 변환된 문자열은
배열 객체의 프로퍼티 이름이 된다. 
객체에 존재하지 않는 프로퍼티 이름을 얻고자 할 땐, 에러를 내지 않고 undefined 값을 반환한다. 이는 배열에도 동일하게 적용된다. 
*/

const fruits = ['🍕', '🥗'];
console.log(fruits); // Array [ "🍕", "🥗" ]
console.log(fruits.length); // // 2
console.log(fruits[0]); // 🍕
console.log(fruits[3]); // undefined : 해당 인덱스에 원소가 없다.
console.log(fruits[-1]); // undefined : '-1'이라는 속성 이름에 해당하는 원소가 없다. 
console.log(fruits[fruits.length - 1]); // commonly used. for the last item

// ✔ About length property
a = [1, 2, 3, 4, 5];

a.length = 3; // Array(3) [ 1, 2, 3 ]
a.length = 0; // // Array [] 이렇게 간단하게 배열을 비우는 방법도 있다. 
a.length = 5; // Array(5) [ <5 empty slots> ] 즉, new Array(5)와 동일하다.


// ✔ Sparce Array
/*
배열에 속한 원소 위치가 연속적이지 않은 배열. 보통 배열의 length property는 배열에 속한 원소의 개수를 의미하지만, 희소배열의 경우 항상 length property value > 실제 원소의 개수
희소 배열의 경우 보통 배열보다 일반적으로 느리고, 메모리를 많이 사용할 뿐만 아니라, 원소를 찾을 때도 시간이 일반 객체 속성 값을 찾는 시간만큼 오래 걸린다. 
단순히 배열 리터럴 사용 시 명시하지 않는 방법으로는 희소 배열을 만들 수 없다. 해당 원소 값을 undefined로 상정하기 때문이다. 이는 배열 내 원소가 아예 존재하지 않는 것과는 다르다. 

*/
let a = new Array(5); // 원소가 없지만, a.length 는 항상 5이다. 
let a = []; // length 값이 0인 빈 배열을 생성한다. 
a[1000] = 0; // 하나의 원소를 할당했지만, length 값은 1001이 된다. 


let a1 = [, , ,]; // 모든 원소가 undefined
let a2 = new Array(3); // 원소가 존재하지 않는 배열

// 0번 인덱스의 값을 확인하기 위해 아래처럼 접근할 때는 둘 모두 undefined를 내놓는다. 
console.log(a1[0]); 
console.log(a2[0]); 

/* in 연산자를 통해 차이점을 확인하고자 했지만, 둘 모두 false를 내놓는다. 
TODO: https://jongmin92.github.io/2017/01/28/JavaScript/complete-guide-to-javascript-chapter-7/ 노트에서는 0 in a1으로 확인한 결과 true를 반환해 원소가 존재함을 증명하는데, 명세가 바뀐 것인지 확인 필요. */
console.log(0 in a1); 
console.log(0 in a2); 

/**
 * 자바스크립트는 배열 관련 연산을 빠르게 해주는 최적화 기법이 다양한데, 이를 제대로 활용하지 않고 배열을 일반 객체처럼 다룬다면, 준비된 기법들이 제대로 동작하지 않는다. 
 * 아래는 잘못된 방법의 예시들
 */
arr.test = 5; // 숫자가 아닌 프로퍼티를 키로 사용한다. 
// arr[0] 과 arr[100] 사이를 아무런 요소로 채우지 않은 경우
// arr[1000]과 arr[999] 같이 요소를 역순으로 저장하는 경우


// 3. Looping over an array. print all fruits 

// fruits.forEach((i in fruits) => console.log(fruits[i])); // ?? 

console.clear();
// a. for loop (also commonly used)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 
// 인덱스를 얻을 수 없으니, 값만 필요한 경우 쓴다. 
for(let fruit of fruits) {
    console.log(fruit);
}

// b-1. for .. in 
// 배열은 객체형에 속하므로 for..in도 가능하다. 
let arr = [1, 2, 3]
for(let key in arr) {
    console.log(arr[key]); // 1, 2, 3
}
/**
 * 그러나 되도록 다른 반복문을 쓰길 권장한다. 
 * 1. for ... in 반복문은 모든 프로퍼티를 대상으로 순회한다. 즉, 키가 숫자가 아닌 프로퍼티도 순회 대상이다. 
 * array-like 객체가 존재하는데, 여기에는 숫자가 아닌 키와 메서드가 있을 수 있다. 이들이 잠재적으로 문제를 일으킬 수 있다. 
 * 2. for .. in은 아무래도 객체와 사용할 때 최적화되어 있다. 배열에 사용할 경우 약 10~100배 느리다. 물론, 병목 지점에서만 문제가 되지만, 적절히 사용할 줄 알아야 한다. 
 */

// c. forEach (ECMAScript 5에서 추가된 대표적인 배열 순회 메서드)
/*
     * Performs the specified action for each element in an array. 배열 안에서 각 요소를 위해 정해진 어떤 액션을 취한다. 
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * 콜백 함수가 첫 번째 인자가 된다. 밸류 하나 하나마다 이 함수를 실행해준다.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     * 
     * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
     * 꼭 이렇게 함수들 읽어보는 습관 가지도록 해!!!!!! 개발 인생을 획기적으로 바꿔준다. 위에 저렇게 물음표가 있으면 optional임. 
     * 배열에 있는 값, 그 값을 가리키는 인덱스, 그리고 배열 전체도 전달을 받을 수 있음. 
*/

const data = [1,2,3,4,5];
let sumOfSquares = 0;
data.forEach(x => {
  sumOfSquares += x * x;
  console.log(sumOfSquares) // 1, 5, 14, 30, 55
});
 
fruits.forEach((fruit, index, array) => {console.log(fruit, index, array)})
// 보통 array는 잘 받아오진 않아. 
// 그리고 한 줄 정도만 리턴해주는 함수에서는 { } culry bracket도 필요가 없다. 

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
/**
 * 
 * Queue는 배열을 사용해 만들 수 있는 대표적인 자료 구조. queue에서 사용하는 주요 연산은 push, shift가 있다. 
 * 물론 배열은 stack 자료 구조를 구현할 때도 쓰인다. stack에서는 push, pop을 쓴다. 
 */
// 4-1. 배열에 원소를 추가하는 방법
// 4-1-1. 배열의 새 인덱스에 값을 할당
// 4-1-2. push() add an item to the end, a[a.length]에 값 할당하는 것과 동일하다. 
fruits.push('🍳', '🥪'); // 요소 여러 개를 한 번에 더해줄 수 있다. 
// 4-1-3. unshift : add an item to the beginning
fruits.unshift('🍘')

// 4-2. 배열의 원소를 삭제하는 방법
// 4-2-1. delete 연산자로 배열의 원소를 삭제한다. 배열의 length 는 줄지 않는다. 배열의 특정 원소를 지우는 것은 해당 원소에 undefined 값을 할당하는 것과 의미가 비슷하다. 원소가 지워지더라도 생기는 공백을 다른 원소가 대신하지 않으며, 해당 배열은 희소 배열이 된다. 
// 4-2-2. pop: remove an item from the end
fruits.pop();
fruits.pop(); // 두 번 출력해서 두 번 뒤에서 삭제가 됨. 
// 4-2-3. shift : remove an item from the beginning
fruits.shift();
fruits.shift();

// note : shift, unshift are so so so slow than pop and push. why????
// 기존 메모리를 차지하는 아이템은 움직이지 않아도 된다. 하지만 맨 처음부터 데이터를 넣으면 기존의 데이터들은 다른 위치로 이동을 해야 해 그래서 시간이 느려진다. 삭제할 떄도 마찬가지야. 지운 자리에 다른 데이터를 넣어줘서 원상복구를 해야 하지. 배열의 길이가 길면 길수록 이렇게 shift, unshift 계속 반복적으로 해야 하므로 가능하면 shift와 unshift보다는 pop과 push를 사용하는 게 더 좋지. 

// 제일 뒤에서 아이템을 접근하는 건 정말 빠르고 중간에 데이터를 넣고 빠르는 것도 인덱스를 활용하기 때문에 빨라. 하지만 전체의 데이터가 움직여야 한다 하면 더 느릴 수밖에 없다
// big-O나 알고리즘 정렬 설명을 깊게 들어가면 원리를 알 수 있음. 

// 4-2-4. splice : remove an item by index position

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

// 7. 다차원 배열
/**
 * 진정한 의미에서 다차원 배열을 지원하진 않지만, 배열의 배열을 사용해 다차원 배열을 흉내낼 수 있다. 다차원 배열 내 원소 접근을 위해서는 [] 연산자를 두 번 사용하면 된다.
 
 */

 /** 8. 배열 타입
  * 
  * ECMAScript 5에서 Array.isArray() 를 통해 특정 객체가 배열인지 판단할 수 있게 됐다. 
  * Array.isArray([]); // true
  * Array.isArray({}); // false
  * 
  * 
  * 9. 유사 배열 객체
  * length 프로퍼티의 양의 정수 이름의 프로퍼티가 있는 객체는 일종의 배열로 취급할 수 있다. 이를 유사 배열 객체라 한다. JS 배열 메서드는 이 유사 배열 객체에도 적용되도록 범용 메서드로 구현되어 있다. 유사 배열은 Array.prototype을 상속 받지 않아, 배열 메서드를 해당 객체의 메서드로 호출할 순 없지만, Function.call 메서드를 통해 간접적으로 호출은 가능하다. 
  */

  let a = {
      "0": "a",
      "1": "b",
      "2": "c",
      length: 3
  }; 

  Array.prototype.joina(a, "+"); // array-like object will get an error: a.join is not a function.

  /**
   * 10. 문자열을 배열처럼 사용하기
   * 
   * 문자열은 읽기 전용 배열처럼 동작한다. 문자열의 각 문자는 charAt() 메서드로 접근할 수 있지만, [] 연산자를 통해서도 접근 가능하다. 문자열을 인덱스로 접근하면 charAt() 메서드 호출을 -> []로 대체해 코드 가독성을 높인다. 
   * 문자열은 변하지 않는 값이므로, 읽기 전용 배열이라는 점에 주의하자. push(), sort(), reverse(), splice() 같은 배열을 직접 수정하는 메서드는 작동하지 않는다.
   */


   /**
    * 
    * 배열에는 toString() 메서드가 구현되어 있다. 요소를 쉼표로 구분한 문자열이 반환된다. 
    * 배열은 Symbol.toPrimitive나 valueOf 메서드가 없다.
    * + 연산자로 피연산자 중 문자열이 하나라도 있으면 나머지 피연산자도 문자열로 변환한다.
    * 
    */

    let arr = [1, 2, 3];
    console.log(String(arr) === '1,2,3'); // true

    console.log("" + 1); // "1"
