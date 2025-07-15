class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
       this.name = name;
    }

    speak() {
        console.log(this.name + " makes a noise.");
    }
}

let animal1 = new Animal('roy');
animal1.speak()

class Dog extends Animal {
    constructor(name, bread) {
        super(name);
        this.breed = bread;
    }

    getBreed() {
        return this.breed;
    }

    setBreed(bread) {
        this.breed = bread;
    }

    speak() {
        console.log(this.getName() + " the " + this.getBreed() + " says woof");
    }
}


let dog1 = new Dog("Jo", "Husky");

dog1.speak();
dog1.setName("rex");
dog1.setBreed("Golden retriever");
dog1.speak();         
