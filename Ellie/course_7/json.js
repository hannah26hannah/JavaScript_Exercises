// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(false); // boolean도 가능!
console.log(json);

json = JSON.stringify(['apple', 'banana']); // ["apple","banana"] focus on double quote. JSON의 규격 사항. 배열처럼 보이게 표기가 되네!
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    // symbol: symbol("id"), // symbol is not defined when trying to stringify to JSON
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2020-07-13T07:58:18.413Z"} JUMP라는 함수는 json에 포함되지 않는다. 함수는 오브젝트에 있는 데이터가 아님. symbol도 마찬가지임. 


json = JSON.stringify(rabbit, ['name']); // name 항목만 json으로 만들고 싶다면?
console.log(json); // {"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`); // key: , value: [object Object]
    return value; 
                    // key: name, value: tori json.js:32:13
                    // key: color, value: white json.js:32:13
                    // key: size, value: null json.js:32:13
                    // key: birthDate, value: 2020-07-13T08:02:38.487Z json.js:32:13
                    // key: jump, value: () => {

                    //         console.log(`${this.name} can jump!`);

                    //     }
})

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})
console.log(json); // {"name":"ellie","color":"white","size":null,"birthDate":"2020-07-13T08:04:59.799Z"}

// 2. Json to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
// Object { name: "tori", color: "white", size: null, birthDate: "2020-07-13T08:06:03.600Z" }

rabbit.jump();
// obj.jump();

rabbit.birthDate.getDate(); //birthDate는 object 그래서 그 안의 메소드 사용 가능
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // birthDate는 stirng이기 때문에... 

