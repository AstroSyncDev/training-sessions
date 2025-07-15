class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sayHello() {
        return `hello ,${this.name}`;
    }
    showEmail() {
        return `email is ${this.email}`
    }
    set changeEmail(newEmail) {
        this.email = newEmail;
    }
    get showinfo() {
        return `name: ${name} email: ${email}`
    }
    // get getInfo() {
    //     return {
    //         name,
    //         email
    //     }
    // }
    // get getName() {
    //     return name
    // }
    // get getEmail() {
    //     return email
    // }
}
let user1 = new user("eldoksh", "moha@gmail")
class admin extends user {
    constructor(name, email) {
        super(name, email)
    }
    adminMsg() {
        return `you are admin`
    }
}
let admin1 = new admin("osama", "bishoy@ggg")
console.log(admin1)
console.log(admin1.sayHello())
user1.changeEmail = "ayman@gmail";
console.log(user1.name)
console.log(user1.email)
console.log(user1.showEmail())

// assign capital name to class (i.e. User, Admin, CustomerOrder)