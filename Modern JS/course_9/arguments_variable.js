// 2. "arguments" variable

// arguments 라는 array-like object를 이용해 인덱스를 사용해 모든 인수에 접근할 수 있다. 

function showName() {
    // console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // 또한 arguments는 iterable object이므로 아래처럼 사용 가능하다.
    // for(let arg of arguments) console.log(arg);

};

showName("Hannah", "Yoo"); // Hannah, Yoo
showName("Hannah"); // Hannah, undefined

// arguments에 비해 rest parameter는 최신의 문법이다. 과거에는 함수 인수 전체를 얻는 방법이 arguments밖에는 없었다. 어쨌든 arguments는 지금도 유효한 문법이긴 하다. array-like object이므로 배열은 아니므로 배열 메서드를 사용할 수 없다는 단점이 있다 (예 arguments.map(..))

// 또한, rest parameters 처럼 일부만 배열에 넣고 쓸 수 있는 것이 아니므로, arguments는 인수 전체를 담는다. 

// ❕ 화살표 함수에는 arguments가 없다. 만일 화살표 함수 내에서 arguments 객체에 접근한다면, 외부의 일반 함수의 arguments 객체를 가리킬 것이다. 

function f () {
    let showArg = () => console.log(arguments[0]);
    showArg();
}
f(1);

// arrow function 은 고유의 this를 가지지 않는다. 거기에 더해 arguments 객체도 가지지 않는다.