'use strict';

// 1. Class declaration
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const hannah = new Person('hannah', 27);
console.log(hannah.name);
console.log(hannah.age);
hannah.speak();

// 2. Getter and Setters;

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age
    }
    set age(value) { 
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', '-1'); 
console.log(user1.age);

// 3. Fields (Public, private)
// too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); 


// 4. Static properties and methods 
// too soon

class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

// const article1 = new Article(1);
// const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class

class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('😪😪😪')
    }
    getArea() { // overriding. 필요한 함수만 재정의해서 쓴다. 
        return (this.width * this.height) / 2;
    }

    toString() {
        return `I'm tringle`
    }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'green');
triangle.draw();
console.log(triangle.getArea()); // but, we should divide it by 2! that's for triangle shape!

// 6. Class Chekcing : instanceOf operator
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true It means we can also override the basic from object

console.log(triangle.toString());

