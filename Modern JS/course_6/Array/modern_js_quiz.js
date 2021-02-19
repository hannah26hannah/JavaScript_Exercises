// https://ko.javascript.info/array 과제

// Q1. 배열은 복사가 될까요?
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
console.log( fruits.length ); // 4 

// solution : 배열은 객체이므로, shoppingCart와 fruits는 모두 같은 배열을 참조한다.

// Q2. 배열과 관련된 연산
/**
 * 배열과 관련된 다섯 가지 연산을 해봅시다.

    요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
    "Rock-n-Roll"을 배열 끝에 추가합니다.
    배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
    배열의 첫 번째 요소를 꺼내서 출력합니다.
    "Rap"과 "Reggae"를 배열의 앞에 추가합니다.

    단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

    Jazz, Blues
    Jazz, Blues, Rock-n-Roll
    Jazz, Classics, Rock-n-Roll
    Classics, Rock-n-Roll
    Rap, Reggae, Classics, Rock-n-Roll
 */

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles)

styles[Math.floor(styles.length/2)] = "Classics"; // another solution : styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles)

// Q3. 배열 컨텍스트에서 함수 호출하기
// 아래 코드의 실행 결과는 ?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
}); // arr = ["a", "b", function() {alert(this)} ];

arr[2](); // 해당 배열을 출력한다. a, b,  function() {...} 즉 arr을 참조하는 this를 받고, 배열을 출력한다. 

// Q3. 입력한 숫자의 합 구하기
/**
 * 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

    prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
    숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
    배열 요소의 합을 계산하고 리턴합니다.

    주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.
 * 
 */

 // MyAnswer
 function sumInput() {
  let num = 0;
  let nums = [];
  
  while (true) {
    num = prompt('숫자를 입력해주세요').trim(); // prompt() 메서드는 두 번째 인자로 value 설정 가능
    num = parseInt(num);
    if (!num.isNumeric) break; // jQuery.isNumeric(), pure JS 메서드가 아니므로 사용 불가
    nums.push(num);
  }
  nums.forEach( num => num += num; ); //   const result = nums.reduce((prev, acc) => {prev + acc}, 0); 
  return num;
}

console.log("입력한 숫자의 값 :", sumInput());

// Solution
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("숫자를 입력해 주세요.", 0);

    // 입력받는 것을 정지해야 하는 경우
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value); // 단항 연산자로, 숫자화 연산자(+)는 피연산자가 숫자값이 아니면 숫자로 변환 시도한다. +"3"은 3을 반환, +true는 1을 반환
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

// 해답에서 작지만 중요한 역할을 하는 부분에 주의를 기울여 주세요. +value로 입력받은 값을 숫자형으로 변경한 이후엔, 빈 문자열(정지 신호)을 0(유효한 숫자)과 구분할 수 없기 때문에, prompt 직후에 value를 숫자로 변환하지 않고 나중에 숫자로 변환하였습니다.

/**
 * 
 * isNumeric()
 * **
 * isFinite() 메소드. Determines whether a supplied number is finite. 또한 필요한 경우 매개변수를 숫자로 변환한다. 매개변수가 양 또는 음의 Infinity, NaN 또는 undefined일 때만 false, 나머지는 true
 * @param number Any numeric value.
 * declare function isFinite(number: number): boolean;
 * 
 * function div(x) {
    if (isFinite(1000 / x)) {
        return 'Number is NOT Infinity.';
    }
    return 'Number is Infinity!';
  }

 */

// Q.4 최대합 부분 배열
function getMaxSubSum(arr) {
  // 요소 전체가 음수일 경우 아무런 요소도 선택하지 않아야 최댓값이 된다. 이 경우, 합은 0이 될 것이다. 
  let max = 0;
  if (arr.every(el => el < 0)) return max;
  else {
    if (arr.some(el => el < 0)) {
    	// 음수가 하나라도 섞인 경우
    	max = arr.filter(el => el >= 0).reduce((prev, acc) => prev + acc, 0);
    } else {
      // 양수만 있는 경우 모두 더한 합을 return 하도록 한다. 
      max = arr.reduce((prev, acc) => prev + acc, 0);
    }
    return max;
  }
  return max;
}

// 인접한 부분 집합이라는 조건을 추가 후 👇

// 인접한 요소끼리 a + b 를 더했을 떄, 그 결과값인 a + b는 항상 a, b 보다 크거나 같아야 한다. 
// 자기 자신인 하나의 요소를 포함해, 원소의 개수 없이 인접한 요소를 더했을 때 이를 각각 비교한다. 

function getMaxSubSum(arr) {
   let maxSum = 0;
   let partialSum = 0;

   for(let el of arr) {
       partialSum += el;
       maxSum = Math.max(maxSum, partialSum); // 최댓값을 기억한다. 
       if (partialSum < 0) partialSum = 0; // 현재의 부분합이 음수가 된 경우 0을 할당한다. 
   }
   return maxSum;
} 