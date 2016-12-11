function Animal(age) {
    this.age = age | 0;
}
Animal.prototype.sleep = function() {
    console.log('zzzzzz');
}
Animal.prototype.eat = function() {
    console.log('yummy');
}

function Dolphin(age) {
    Animal.call(this, age);
}
Dolphin.prototype = Object.create(Animal.prototype);
Dolphin.prototype.swim = function() {
    console.log('splah');
}
Dolphin.prototype.constructor = Dolphin;

function Lion(age) {
    Animal.call(this, age);
}
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.roar = function() {
    console.log('wrrrrr');
}
Lion.prototype.constructor = Lion;

function FlyingAnimal(age) {
    Animal.call(this, age);
}
FlyingAnimal.prototype = Object.create(Animal.prototype);
FlyingAnimal.prototype.fly = function() {
    console.log('whoohooo');
}
FlyingAnimal.prototype.constructor = FlyingAnimal;

function Bee(age) {
    FlyingAnimal.call(this, age);
}
Bee.prototype = FlyingAnimal.prototype;
Bee.prototype.constructor = Bee;

function Eagle(age) {
    FlyingAnimal.call(this, age);
}
Eagle.prototype = Object.create(FlyingAnimal.prototype);
Eagle.prototype.constructor = Eagle


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
//     console.log(Animal.__proto__ === FlyingAnimal.__proto__);
//     console.log(Animal.__proto__ === Bee.__proto__);
// }