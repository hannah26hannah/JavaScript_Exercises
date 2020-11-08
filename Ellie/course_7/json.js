// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(false); // 객체뿐만 아니라 원시형 자료형인 boolean 값도 가능
console.log(json);
json = JSON.stringify(['apple', 'banana']); // 배열도 가능
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); 


json = JSON.stringify(rabbit, ['name']);
console.log(json); // {"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`); 
    return value; 
})

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})
console.log(json);

// {"name":"ellie","color":"white","size":null,"birthDate":"2020-07-13T08:04:59.799Z"}


// 2. Json to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);


rabbit.jump();
// obj.jump(); will throw an error

rabbit.birthDate.getDate(); //birthDate는 object 그래서 그 안의 메소드 사용 가능
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // birthDate는 stirng이기 때문에... 

