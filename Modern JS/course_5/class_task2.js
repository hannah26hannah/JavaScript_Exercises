// Error Creating an instance

class Animal {
    constructor(name) {
        this.name = name
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super()
        this.name = name;

        // or
        super(name)
        this.created = Date.now();
    }
}

let rabbit = new Rabbit('white rabbit'); // This is not defined.
console.log(rabbit.name)

// The reason why this got an error is the child class didn't call super() inside its constructor().

