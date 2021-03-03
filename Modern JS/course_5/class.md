# What is Class
- ES6 syntax

```js
// before using class syntax
const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name)
    }
}
const hannah = new User('hannah', 28);

```
```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() { // User.Prototype에 저장됨
        console.log(this.name)
    }
}

const hannah = new User("Hannah", 28)
console.log(typeof User); // function 
```

what `class user { ... }` construct really does is:
1. Creates a function named `User`, that becomes the result of the class declaration. The function code is taken from the `constructor` method (assumed emptry if we don't write such method)
2. Stores class methods, such as `sayHi`, in `User.prototype`
After `new User` object is created, when we call its method, it's taken from the prototype. So the object has access to class methods.
- 기존 생성자 함수를 쓸 때도, class 문법을 쓸 때처럼 method를 prototype에 저장해 구현해볼 수도 있다. 
    ```js
    const User = function (name, age) {
        this.name = name;
        this.age = age;
        // this.showName = function () {
        //     console.log(this.name)
        // }
    }
    User.prototype.showName = function () {
        console.log(this.name)
    }
    const hannah = new User('hannah', 28); // (*) undefined
    ```
    - 이때, `*`가 가리키는 코드는 아무것도 반환하는 값이 없으므로 undefined가 출력이 될 것이다. 개발자가 실수한 코드이지만, 오류를 내진 않는다. 
    ```js
    class User {
        constructor(name) {
            this.name = name;
        }
        sayHi () {
            console.log(this.name);
        }
    }

    console.log(typeof User); // function
    console.log(User === User.prototype.constructor); // true
    console.log(User.prototype.sayHi); // console.log(this.name)
    console.log(Object.getOwnPropertyName(User.prototype)); // constructor, sayHi
    console.log(User("Hannah")); // Class constructor User cannot be invoked without 'new'
    ```
    - 하지만 위 예시에서 마지막 코드는 TypeError를 내는 것을 알 수 있다. 

## Declare class without `class` keyword
```js
// 1. Create constructor function
function User(name) {
    this.name = name;
}

// a function prototype has 'constructor' property by default, so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function() { // arrow function didn't work
    console.log(this.name)
}

// Usage
let user = new User("Hannah");
user.sayHi();
```

- a function created by `class` keyword is labelled by a special internal property `[[FunctionKind]]:"classConstructor"`. So it's not entirely the same as creating it manually.
    ```js
    class User {
        constructor() { }
    }
    console.log(typeof User); // function
    User(); // Error: Class constructor User can't be invoked without 'new'
    ```

- Also a string representation of a class constructor in most javascript engines starts with the 'class...'
    ```js
    class User {
        constructor() {}
    }
    console.log(User); // class User { ... }
    ```

- Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the 'prototype'
    - `for .. in`을 통해 확인했을 때 prototype에 저장되는 class의 method는 순회하는 목록에서 빠지는 것을 알 수 있다. 
- Classes always `use strict`. All code inside the class construct is automatically in strict mode.

## Class Expression
- Class can be defined insdie another expression, passed around, returned, assigned, etc.

```js
let User = {
    sayHi() {
        console.log("hi")
    }
}
```

- Class expression may have a name. if a class expression has a name, it's visible inside the class only:
```js
// Named Class Expression
let User = class MyClass {
    sayHi() {
        console.log("HI")
    }
}
new User().sayHi(); // shows MyClass definition
console.log(MyClass); // Error. MyClass name isn't visible outside of the Class

// dynamically made class
function makeClass(phrase) {
    return class {
        sayHi() { console.log(phase)}
    }
}
let User = makeClass("Hello")
new User().sayHi(); // Hello
```
## getter & setter
- `class.js`

## Computed names [...]
```js
class User {
    ['say'+'Hi'] () {
        console.log('hello')
    }
}
new User().sayHi(); // hello
```

## Class Fields
- `class.js`
- 'Class Fields' is a syntax that allows to add any properties. 

## Making Bound methods with class fields
Functions in JavaScript hava a dynamic `this`. It depends on the context of the call.
So if an object method is passed around and called in another context, `this` won't be a reference to its object any more. 
```js
class Button {
    constructor(value) {
        this.value = value;
    }
    click() {
        console.log(this.value)
    }
}
let button = new Button("Hello")
setTimeout(button.click, 1000); // undefined
```
This happens because of 'losing `this`'. To solve,
1. pass a wrapper-function, such as `setTimeout(() => button.click(), 1000`
2. Bind the method to object, e.g. in the constructor.
3. Class Field also provides another syntax:
```js
class Button {
    constructor(value) {
        this.value = value;
    }
    click = () =>{
        console.log(this.value)
    }
}
let button = new Button("Hello")
setTimeout(button.click, 1000); // Hello
```
- The class field `click = () => { ... }` is created on a per-object basis, there's separate function for each `Button` object, with `this` inside it referencing that object. We can pass `button.click` around anywhere, and the value of `this` will always be correct.

- This is especially useful in browser environment, for event listeners.

# Class Inheritance
```js
// Using extends keywords
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log('drive...')
    }
    stop() {
        console.log('stop')
    }
}

class BMW extends Car {
    park() {
        console.log('park')
    }
}

const z4 = new BMW("blue");
```
- `class Child extends Parent` means `Child.prototype.__proto__` will be `Parent.prototype`, so methods are inherited.
- Class inheritance is a way for one class to extend another class. so we can create new functionality on top of the existing.
- Internally, `extends` keyword works using the good old prototype mechanics. It sets `BMW.prototype.[[Prototype]]` to `Car.prototype`. So if a method is not found in `BMW.prototype`, JavaScript takes it from `Car.prototype`

## Overriding a method
```js
class BMW extends Car {
    park() {
        console.log('park')
    }
    stop() {
        console.log('Sleep...')
    }
}

const z4 = new BMW("blue");
z4.stop(); // 'sleep'
```
- When overriding a constructor, we must call parent constructor as `super()` in `Child` constructor before using `this`
```js
class Tesla extends Car {
    constructor() {
        this.navigator = 1;   
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
    stop() {
        super.stop();
        console.log('it is not stopped')
    }
}
const modelS = new Tesla('white')
```
Usually we don't want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, bur call the parent method before/after it or in the process.
Class provide `super` keyword for that
- `super.method()` calls a parent method
- `super(...)` calls a parent constructor(inside our constructor only)

- TIP : Arrow function have no `super`
    ```js
    class Tesla extends Car {
        stop() {
            setTimeout(() => super.stop(), 1000);
            // call parent stop after 1 sec
        }
    }
    // If accessed, it's taken from the outer function, so the super in the arrow function is the same as in stop(), so it works as intended. If we specifiy a 'regular' function, there would be an error

    setTimeout(function () { super.stop() }, 1000); 
    ```

## Overriding constructor
According to the specification, if a class extends another class and has no `constructor`, then the following 'empty' `constructor` is generated.
```js
class Hyunhai extends Car {
    // generated for existing classes without own constructors
    constructor(...args) {
        super(...args)
    }
}
```
- It basically calls the parent constructor passing it all the arguments. This happens when we don't write a constructor of our own. 
- In JavaScript, there's a distiction between a constructor function of an inheriting class (so-called 'derived constructor') and other functions: A derived constructor has a special internal property `[[ContructorKind]]: "derived"`. That's a special internal label.
- That label affets its behavior with `new`
- when a regular function is executed with `new`, it creates an empty object and assigns it to `this`
- But when a derived constructor runs, it doesn't do this. It expects parent constructor to do this job. So a derived constructor must call `super` in order to execue its parent (base) constructor, otherwise the object for `this` won't be created. And we'll get an error.

## Super: internals, [[HomeObject]]
- Methods remember thier class/object in the internal `[[HomeObject]]` property. That's how `super` resolves parent methods.
- So it's not safe to copy a method with `super` from one object to another.
## [[HomeObject]]
To Prove the solution, JS adds one more special internal property for functions: `[[HomeObject]]`

When a function is specified as a class or object method, its `[[HomeObject]]` property becomes that object.
Then `super` uses it to resolve the parent prototype and its methods. 

```js
let animal = {
    name: 'Animal',
    eat() {
        console.log(`${this.name} eats..`)
    }
};

let rabbit = {
    __proto__ : animal,
    name: "Rabit",
    eat() { // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
}

let longEar = {
    __proto__ : rabbit,
    name: "Long Ear",
    eat() { // longEar.eat.[[HobObject]] == longEar
        super.eat();
    }
}

longEar.eat(); // Long Ear eats..
```
- This works as intended, due to `[[HomeObject]]` mechanics. A method, such as `longEar.eat`, knows its `[[HomeObject]]` and takes the parent method from its prototype. Without any use of `this`

## Methods are not free
As we've known before, generally functions are 'free', not bound to objects in javascript, So they can be copied between objects and called with another `this`

The very existence of `[[HomeObject]]` violates that principle, because methods remember their objects. `[[HomeObject]]` can't be changed, so this bond is forever

The only place in the language where `[[HomeObject]]` is used - is `super`, so if a method does not use `super`, then we call still consider it free and copy between objects. But with `super` things may go wrong. 

- This is an example of a wrong `super` result after copying:
```js
let animal = {
    sayHi() {
        console.log("I am an animal")
    }
}

// rabbit inherits from animal
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi()
    }
}

let plant = {
    sayHi() {
        console.log('I am a plant')
    }
}

// tree inherits from plant
let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi // (*)
}

tree.sayHi(); // I am an animal
```
The reason is:
- in the line (*), the method tree.sayHi was copied from rabbit. Maybe we just wanted to avoid code duplication?
- Its `[[HomeObject]]` is rabbit, as it was created in rabbit. There's no way to change `[[HomeObject]]`
- The code of tree.sayHi() has super.sayHi() inside. It goes up from rabbit and takes the method from animal.


## Methods, not function properties
`[[HomeObject]]` is defined for methods both in classes and in plain objects. But for objects, methods must be specified exactly as `method()`, not as `'method: function()'`

- In the example below a non-method syntax is used for comparison. `[[HomeObject]]` property is not set and the inheritance doesn't work:
```js
let animal = {
    eat: function() {
        // intentially writing like this instead of 
        // eat() { ... }
    }
}

let rabbit = {
    __proto__ : animal,
    eat: function() {
        super.eat();
    }
}

rabbit.eat();  // 'super' keyword unexpected here
```
- Error Occured because there's no `[[HomeObject]]`

# Reference
- [The 'class' syntax](https://javascript.info/class)