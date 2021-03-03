// Class Inheritance

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
    stop() {
        console.log('sleep')
    }
}

const z4 = new BMW("blue");
z4.stop(); // sleep

// 만일 상속을 가진 채로 overriding 하고자 한다면, 

class Tesla extends Car {
    constructor(prop) {
        // this.navigator = 1;   // Must call super constructor in derived class before accessing 'this' or returning from derived constructor, 즉 super() 메서드로 부모 클래스의 constructor()를 실행해주어야 한다. 
        super(prop);
        this.navigator = 1;

    }
    stop() {
        super.stop();
        console.log('it is not stopped')
    }
}
const modelS = new Tesla('white')
modelS.stop();
// stop
// It is not stopped

console.log(modelS.navigator); // 1
console.log(modelS.color); // white
console.log(modelS.wheels); // 4

class Kia extends Car {
    constructor(props) {
        super(props);
        this.size = 'small'
    }
    stop () {
        setTimeout(() => { super.stop() }, 1000); // works fine
        
        // setTimeout(function(){
        //     super.stop();
        // }, 1000)
        // 'super' keyword in 'normal' function throws an error : 'super' keyword unexpected here
        
        console.log('setTimeout super 1 sec later')

    }
}

const morning = new Kia('pink');
morning.stop();
/*
setTimeout super 1 sec later
stop
*/

