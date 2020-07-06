const farm = ['🐔', '🦔', '🐹', '🐌', '🐭', '🐴'];
console.log(farm);
console.log(farm.length);

console.log(`This farm has these animals: ${farm.toString()}`);
console.log(farm.toString());
console.log(farm.toLocaleString());

console.log(farm.pop()); // popped element will be returned 
console.log(farm);

console.log(farm.push('😀')); // push 한 뒤의 length of array, number type을 출력
console.log(farm);

console.log(farm.push(['😁', '😂']));
console.log(farm);

console.log(farm.splice(5)); // 지운 녀석들을 반환하네
console.log(farm); 

const human = ['😁', '😂', '😎', '🙂'];
const happyFarm = human.concat(farm);
console.log(happyFarm);

console.log(happyFarm.join());
console.log(happyFarm.toString());
console.log(happyFarm.toLocaleString());

// console.log(human.reverse());
console.clear();

human.shift();
console.log(human);
console.log(human.shift()); // 지워지는 내용이 반환되는군

console.log(farm);
// console.log(farm.slice(1)); // 가장 처음에 위치한 item이 썰려 나감
// console.log(farm.slice(2)); // 첫 번째 위치에서 두 개의 길이만큼 잘려나감
console.log(farm.slice(1, 1)); // 빈 arr가 반환되네... 
console.log(farm.slice(1, 2), farm) 

console.clear();
console.log([1, 3, 6, 0, 2].sort((a, b) => a - b)); // [ 0, 1, 2, 3, 6 ]
console.log([1, 3, 6, 0, 2].sort((a, b) => b - a)); // [ 6, 3, 2, 1, 0]
console.log([1, 3, 6, 0, 2, 2].sort((a, b) => a - b)); // [ 0, 1, 2, 2, 3, 6]

console.log(farm);
console.log(farm.splice(1, 2, '😐'));
console.log(farm);

console.log(farm.unshift('😠')); // length를 반환
console.log(farm)

console.log(farm.indexOf('😠'));

const arrayOfNumbers = ['5', '10', '3', '44', '1'];
console.log(arrayOfNumbers.every((value) => value > 0)); // true
console.log(arrayOfNumbers.every((value) => value > 1)); // false
console.log(arrayOfNumbers.some((value) => value > 1)); // true 하나라도 통과해서. 

// farm.forEach((value, index, array) => console.log(value, index, array));
farm.map((value, index, array) => console.log(value, index, array));
