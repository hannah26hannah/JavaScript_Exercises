/*Destructuring assignment is a special syntax that allows us to 'unpack' arrays or objects into a bunch of variables, as sometimes that's more convenient.
It's called 'destructuring assignment', because it 'destructurizes' by copying items into variables. But the array itself is not modified.
We can use destructuring assignment for any iterable, not only arrays: because internally a destructuring assignment works by iterating over the right value. It's kind of syntax sugar for calling for .. of over the value to the right of = and assigning the values.
*/


// 1. Array destructuring

let arr = ["May", "July"];
let [firstName, surName] = arr; // Shorter way to write ---> let firstName = arr[0]; let surName = arr[1]
console.log(firstName, surName); // May July

[firstName, surName] = "John Smith".split(" ");
console.log(`${firstName} and ${surName}`); // John and Smith

// 2. Ignore elements using commas : Unwatned elements of the array can be thrown away via an extra comma:

const longArr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
let [fName, , title] = longArr;
console.log(title); // Consul


// 3. The rest '...'
/* the value of rest is the array of the remaining array elementes. 
We can use any other variable name in place of rest, three dots define this feature. */

let [name1, name2, ...rest] = longArr; 

console.log('rest[0]', rest[0]); // rest[0] Consul
console.log('rest[1]', rest[1]); // of the Roman Republic
console.log('rest의 length', rest.length); // 2

// 4. Works with any iterable on the right-side

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3])
console.log(`a : ${a} and two : ${two}`);

// 5. Assign to anything at the left-side
let user = {};
[user.name, user.familyName] = "Bora Kim".split(" ");
console.log(`user name : ${user.name} and family name : ${user.familyName}`);

// 6. Looping with .entries() 
let person = {
    name: 'Bora',
    age: 28
};

for (let [key, value] of Object.entries(person)) { // Object.entries(obj)
    console.log(`${key}:${value}`); // name:Bora age:28
}

// 7. Looping with Map is simpler
let student = new Map();
student.set('name', 'Seugi');
student.set('age', 16);

for (let [key, value] of student) {
    console.log(`${key}: ${value}`); // name: Seugi age: 16
}

// 8. Swap variables trick: We can swap more than two variables this way.
let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];
console.log(`${guest} and ${admin}`); // Pete and Jane

// 9. Default Values
// If the array is shorter than the list of variables at the left, there'll be no errors. Absent values are considered undefined:

let [left, right] = [];
console.log(`left : ${left} and right : ${right}`); // left : undefined and right : undefined

// we can set 'default' value to replace the missing one. 
let [leftVal = 'guest', rightVal = 'admin'] = ['July'];
console.log(`left value : ${leftVal} and right value : ${rightVal}`); 
// left value : July and right value : admin

// Default values can be more complex expressions or event fucntion calls. They are evaluatated only if the value is not provided.

let [leftCall = console.log('left Call?'), rightCall = console.log('right Call?')] = ["May"];
console.log(leftCall); // May
console.log(rightCall); // right Call?

// 10. Object destructuring
let options = {
    menuTitle: 'Awesome Menu',
    width: 100,
    height: 200
};

// let {menuTitle, width, height} = options;
// console.log(`title : ${menuTitle} and height: ${height}`); // title : Awesome Menu and height: 200

// The order does not matter. This works, too
let {height, width, menuTitle} = options;
console.log(`title : ${menuTitle} and height: ${height}`); // title : Awesome Menu and height: 200

// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let {width: w, height: h, menuTitle: m} = options;
console.log(`width as w : ${w} and menuTitle as m : ${m}`);
// width as w : 100 and menuTitle as m : Awesome Menu

let anotherOptions = {
    anotherTitle: 'this is not menu yet'
}

let {anotherHeight = 200, anotherWidth = 400, anotherTitle} = anotherOptions;
console.log(`another height : ${anotherHeight} and anotherTitle : ${anotherTitle}`);
// another height : 200 and anotherTitle : this is not menu yet

// Combine both the colon and equality:
let combinedOptions = {
    combinedTitle: 'Combined Menu'
}

let {width: anotherW = 300, combinedTitle: anotherCT = 'simple menu'} = combinedOptions;
console.log(`another width : ${anotherW} and another Combined Tittle : ${anotherCT}`);
// another width : 300 and another Combined Tittle : Combined Menu

// Just extract what you need like below
let food = {
    vege: 'is good',
    drinks: 'are juicy'
}

let {vege} = food;
console.log(vege); // is good

// 11. The rest pattern '...' is not supported by some older browsers like IE, so need to use Babel to polyfill it.

// 12. We Could use existing variables without let but ...
let orange, apple, banana;
// {orange, apple, banana} = {orange: 'is fresh', apple: 'is red', banana: 'is yummy'}; // this throws an error
/* The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. 

So here javaScript assumes that we have a code block, that's why there's an error. To show JavaScript that it's not a code block, we can wrap the expression in parentheses.
*/
({orange, apple, banana} = {orange: 'is fresh', apple: 'is red', banana: 'is yummy'});
console.log(`orange : ${orange}`); // is fresh

// 13. Nested destructuring
let bucket = {
    alphabet: {
        aa: 'a',
        bb: 'b'
    },
    hangeul: ["ㄱ", "ㄴ", "ㄷ"],
    switchLang: false,
    extra: true
};

let {
    alphabet: {
        aa, 
        bb
    },
    hangeul: [item1, item2],
    switchLang: isSwitched = true,
    menuExist = false
} = bucket;
console.log(`is Switched : ${isSwitched} and item1 : ${item1} + menuExist : ${menuExist}`);
// is Switched : false and item1 : ㄱ + menuExist : false

// Note that there are no variables for alphabet and hangeul, as we take their contents instead.

// 14. Smart function parameters
