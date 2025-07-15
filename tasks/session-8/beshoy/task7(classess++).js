class Notifier {
  send(message) {
    console.log("Notifier:", message);
  }
}

class User {
  constructor(name, email, notifier) {
    this.name = name;
    this.email = email;
    this.notifier = notifier;
  }

  sayHello() {
    return `hello, ${this.name}`;
  }

  showEmail() {
    return `email is ${this.email}`;
  }

  set changeEmail(newEmail) {
    this.email = newEmail;
    this.notifier.send(`Email for ${this.name} changed to ${newEmail}`);
  }

  set changeName(newName) {
    this.name = newName;
    this.notifier.send(`name for ${this.email} changed to ${newName}`);
  }

  get showInfo() {
    return `name: ${this.name}, email: ${this.email}`;
  }
}

class Admin extends User {
  constructor(name, email, notifier) {
    super(name, email, notifier);
  }

  adminMsg() {
    return `You are admin`;
  }
}

const notifier = new Notifier();

const user1 = new User("Eldoksh", "moha@gmail.com", notifier);
const admin1 = new Admin("Osama", "bishoy@ggg.com", notifier);

user1.changeEmail = "ayman@gmail.com";

console.log(user1.sayHello());
console.log(user1.showEmail());
console.log(user1.showInfo);

console.log(admin1.sayHello());
console.log(admin1.adminMsg());
console.log(' ')
const notifier1 = new Notifier();

const user2 = new User("Eldoksh", "moha@gmail.com", notifier);
const admin2 = new Admin("Osama", "bishoy@ggg.com", notifier);

user2.changeEmail = "eldo@gmail.com";
user2.changeName= "hoda"
console.log(user2.sayHello());
console.log(user2.showEmail());
console.log(user2.showInfo);


//console.log(admin2.sayHello());
//console.log(admin2.adminMsg());







