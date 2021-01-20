// 54. Write a JavaScript program to count the number of vowels in a given string.

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    console.log(m) // ["a", "a", "i", "a"]
    return m === null ? 0 : m.length;
}

console.log(getVowels("Hannah is back!")) // 4

// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색. 
// 문법 str.match(regexp)
// 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡쳐된 결과가 옴. 일치하는 것이 없으면 null이 반환. 

// m === null 이면 일치하는 값이 아예 없다는 뜻이므로, 삼항 연산자에서 true일 경우의 값인 0이 오고, false라면 값이 있다는 뜻이므로, 매치되는 결과, 즉 vowel의 갯수. (Array로 반환이 되므로 배열의 길이가 갯수가 됨.)

// 정규식에 g 플래그가 포함되어 있으면, 일치는 객체가 아닌 일치하는 하위 문자열을 포함하는 Array를 반환. 캡쳐된 그룹은 반환되지 않음. 일치하는 것이 없으면 null이 반환됨. 

// match() 사용하기 예제. MDN 출처



