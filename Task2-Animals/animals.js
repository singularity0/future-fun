'use strict'

class Animal {
    constructor(age) {
        this.age = age;
        this.sleep = () => console.log('zzzzzz');
        this.eat = () => console.log('yummy');
    }
}

class Dolphin extends Animal {
    constructor(age) {
        super(age);
        this.swim = () => console.log('splah');
    }
}

class Lion extends Animal {
    constructor(age) {
        super(age);
        this.roar = () => console.log('wrrrrr');
    }
}

class FlyigAnimal extends Animal {
    constructor(age) {
        super(age);
        this.fly = () => console.log('whoohooo');
    }
}

class Eagle extends FlyigAnimal {
    constructor(age) {
        super(age);
    }
}


// quickTest();

// function quickTest() {
//     let someDopphin = new Dolphin(3);
//     console.log(someDopphin.age);
//     someDopphin.swim()
//     someDopphin.sleep()
//     console.log('----');
//     let someEagle = new Eagle(2);
//     console.log(someEagle.age);
//     someEagle.sleep();
//     someEagle.fly();
// }