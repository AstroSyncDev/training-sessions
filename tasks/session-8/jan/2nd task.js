class DogTalk {
    speak(name) {
        return ` ${name} says: Woof woof!`;
    }
}
class CatTalk {
    speak(name) {
        return ` ${name} says: Meow~`;
    }
}

class LionTalk {
    speak(name) {
        return ` ${name} says: Roooaar!`;
    }
}
class Animal {
    constructor(name, talkStyle) {
        this.name = name;
        this.talkStyle = talkStyle; // <-- Injected behavior
    }
    talk() {
        console.log(this.talkStyle.speak(this.name));
    }
}
const dog = new Animal("Rex", new DogTalk());
const cat = new Animal("Mittens", new CatTalk());
const lion = new Animal("Simba", new LionTalk());

dog.talk();
cat.talk();
lion.talk();   