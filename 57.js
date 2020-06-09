// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

// 정규식 문제가 아니었음. 주어진 str을 특정 횟수를 반복해 카피를 만들어 하나의 str으로 반환하는 것임. 

function copy(str) {
    for (i = 0; i < 5 ; i++){
        return str = str.concat('', str)
    }
}
console.log(copy("apple"))

// 아래가 솔루션

function copy(str, n) {
    if (n < 0) 
        return false;
    else 
        return str.repeat(n);
}

console.log(copy("apple", 5));

// 결국 이 repeat이라는 메소드를 배우기 위해서 여기까지 왔네. 게다가 얼마나 반복할지 매개변수도 받을 수 있는 함수야. 
