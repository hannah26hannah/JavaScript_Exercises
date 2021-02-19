// Array.prototype.splice

const originalArray = ['101', '102', '103', '104'];
const cloneArray = originalArray.slice();
let i = 3;

cloneArray.splice(i, 1);
console.log(cloneArray); // i번째 인덱스 값인 '104' 값을 제거한 후 cloneArray는 제거된 배열을 반환 
console.log(cloneArray.join("----")); // 각 요소를 구분자를 통해 join해서 콘솔에 보여준다. 


// Array.prototype.filter
// filter example 1
// going to use originalArray again
const current = '102';
// const arrWithoutCurrent = originalArray.filter(function(x) { return x !== current; }); 
// const arrWithoutCurrent = originalArray.filter((x) => x !== current ); 
const arrWithoutCurrent = originalArray.filter(x => x !== current ); 
console.log('arrWithoutCurrent', arrWithoutCurrent);
console.log('originalArray', originalArray); // filter를 사용하고 난 후에도 originalArray는 수정되지 않는다. 
console.log(arrWithoutCurrent.join("---"));

// filter() 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다. 

// filter example 2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'app', 'le'];
const result = words.filter(word => word.length > 6);
console.log('result', result);
console.log('words', words)

const result2 = words.filter(words => words.length > 6 || words.length < 4); // 논리연산자 사용 가능
console.log('result2', result2);
console.log('words', words);

// syntax
// arr.filter(callback(element[, index[, array]])[, thisArg])

// callback : 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버린다. 다음 세 개의 매개 변수를 받는다. 
    // element : 처리할 현재 요소
    // index (optional) : 처리할 현재 요소의 인덱스
    // array (optional) : filter를 호출한 배열
    // thigArg : callback을 실행할 때 this로 사용하는 값.

// 반환값 : 테스트로 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면, 빈 배열을 반환한다. 

// 설명
/*
    filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성한다. callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출한다. 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출하지 않으며, callback 테스트를 통과하지 못한 배열 요소는 그냥 건너 뛰며, 새로운 배열에 포함하지 않는다. 

    callback은 요소 값(element), 요소 인덱스(index), 순회(traverse)되는 배열 객체(array) 세 인수와 함께 호출이 된다. 

    만일 thisArg 매개변수가 filter에 제공된 경우, 호출될 때 그 값은 callback의 this 값으로 전달된다. 그 외에 undefined 값도 callback의 this 값으로 쓰기 위해 전달된다. 결국 callback에 의해 관찰될 수 있는 this 값은 this를 결정하는 함수의 평소 규칙에 따라 결정된다. 

    filter()는 또한, 호출되는 배열을 변화시키지 않는다 (mutate하지 않는다)

    filter()에 의해 처리되는 요소의 범위는 callback의 첫 호출 전에 설정된다. filter()의 호출 시작 이후로 배열에 추가되는 요소는 callback에 의해 방문되지 않는다. 배열의 기존 요소가 변경 또는 삭제된 경우, callback에 전달된 그 값은 filter()가 그 요소를 방문한 시점에 값이 된다. 삭제된 요소는 반영되지 않는다. 

*/ 

// filter example 3
    // 모든 작은 값 걸러내기
function isBigEnough(value) {
    return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log('filtered', filtered) // [ 12, 130, 44 ]

const beforeFilter = [12, 5, 8, 130, 44]
const afterFilter = beforeFilter.filter(x => x >= 10);
console.log('afterFilter', afterFilter) // [ 12, 130, 44 ]

console.clear();
    // JSON에서 무효한 항목 거르기 :: 0이 아닌, 숫자 id인 모든 요소의 filtered json을 만들기 위해 filter()를 사용한다. 
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

let invalidEntries = 0;

function isNumber(obj) { 
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj) 
};

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    };
    invalidEntries++;
    return false;
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
console.log('Number of Invalid Entries = ', invalidEntries); // Number of Invalid Entries =  5

console.clear()
// filter example 4
    // 배열 내용 검색 :: 배열 내용을 조건에 따라 검색하기 위해 filter()를 사용함
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/* 검색 조건에 따른 배열 필터링 (쿼리) */
function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    }
    )};


console.log(filterItems('ap'));
console.log(filterItems('an'));
