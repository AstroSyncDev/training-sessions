
// const a = 5;
// const b = 2;
// const sum = a + b;
// console.log('sum =', sum)

// const a2 = 3;
// const b2 = 2;
// const sum2 = a2 + b2;
// console.log('sum =', sum2)


// ========================== 1) void function

// function greet() {
//     console.log("Hello there!");
// }

// greet(); // calling the function

// ========================== 2) Function with return value

function getGreeting() {

    return "Hello there!";
}

// let message = getGreeting(); // message = "Hello there!"
// console.log(message)

// console.log(getGreeting())

// function sum() {
//     return 5 + 7
// }

// console.log(10 + sum())

//  ========================== 3) function with params

// function sum(a, b) {
//     const result = a + b;
//     return result;
// }

// console.log(sum(5, 11))

// function printEmployee(name, age, money) {
//     console.log('Employee info:')
//     console.log('name:', name)
//     console.log('age:', age)
//     console.log('money:', money)
// }

// printEmployee('softy', 24, 0)

// const employee = {
//     name: 'softy',
//     age: 24,
//     money: 0,
// }

// function printEmployee(employee) {
//     console.log('Employee info:')
//     console.log(employee)
// }

// printEmployee(employee)

// const employee = {
//     name: 'softy',
//     age: 24,
//     money: 0,
// }

// function printEmployee(employee) {
//     console.log('Employee info:')
//     console.log('name:', employee.name)
//     console.log('age:', employee.age)
//     console.log('money:', employee.money)
// }

// printEmployee(employee)
// printEmployee()

// function printEmployee({ name, money, age }) {
//     console.log('Employee info:')
//     console.log('name:', name)
//     console.log('age:', money)
//     console.log('money:', age)
// }

// printEmployee({ name: 'softy', money: 9, age: 24 })
// const employee = {
//     name: 'softy',
//     age: 24,
//     money: 0,
// }
// printEmployee(employee)

// ================= 4) Function with Default Parameters

// function greet(name = "Guest", money) {
//     console.log("Hello, " + name + money);
// }

// greet(undefined, 5);       // Output: Hello, Guest
// greet("Ali");  // Output: Hello, Ali

// ===================== 5) Anonymous Function

// let sayMsg = function (msg = "Goodbye!") {
//     console.log(msg);
//     return 5;
// };

// // function sayMsg(msg = "Goodbye!") {
// //     console.log(msg);
// // };

// sayMsg("Hello");
// sayMsg();
// const val = sayMsg()
// console.log(val)

// ===================== 6) Arrow Function


// console.log(double(4)); // Output: 8

// const double = function (x) {
//     return x * 2
// }

// const double = (x) => {
//     return x * 2
// };

// const double = (x) => x * 2;

// console.log(double(4)); // Output: 8

// const array = [50, 60, 70]
// for (let index = 0; index < array.length; index++)
//     console.log(array[index]);
// console.log('hello world!');

// const employee = {
//     name: 'Softy',
//     age: 24,
//     money: 23,
//     greetEmployee: function () {
//         console.log(employee.name)
//     },
//     price: {
//         doublePrice: (x) => x * 2
//     }
//     // getName: () => this.name,
//     // getName: function () {
//     //     return this.name
//     // },
// }

// console.log(employee.price.doublePrice(10))

// =================== 6.5) Nested function

// function greet(msg) {
//     console.log(msg)

//     function goodBye() {
//         console.log('Good bye world!')
//     }

//     goodBye();
// }

// greet('Hello world')
// // goodBye() // will not work

// =================== 7) Callback function

// function getBread() {
//     console.log("Got the bread.");
//     addPeanutButterAndJelly();
// }

// function addPeanutButterAndJelly() {
//     console.log("Adding peanut butter...");
//     console.log("Adding jelly...");
//     console.log("Sandwich is ready to eat!");
// }

// // Start the sandwich-making process
// getBread();


// function getBread(callback) {
//     console.log("Got the bread.");
//     callback(5);
// }

// function addPeanutButterAndJelly(someVal) {
//     console.log("Adding peanut butter...");
//     console.log("Adding jelly...");
//     console.log("Sandwich is ready to eat!");
//     console.log('someVal', someVal)
// }

// // Start the sandwich-making process
// getBread(addPeanutButterAndJelly);

// =================== 9) Immediately Invoked Function Expression (IIFE)

// (function () {
//     console.log("I'm running immediately!");
// })();

// console.log(
//     5 + {
//         console.log('log')
//         return 6*6
//     }
// )

// function get36() {
//     console.log('returning 36')
//     return 6 * 6
// }

// console.log(
//     5 + get36()
// )

// console.log(
//     5 + (function (a, b) {
//         console.log('returning 36')
//         return a * b
//     })(6, 6)
// )

// =================== 10) Recursive function

// infinite loop:

// function greet() {
//     console.log('Hello world')
//     greet()
// }

// greet()

// function countDown(n) {
//     if (n > 0) {
//         console.log(n);
//         countDown(n - 1);
//     }
//     console.log(n)
// }

// countDown(10);

// function totalSum(n) {
//     if (n === 1) return 1

//     return n + totalSum(n - 1)
// }

// console.log(totalSum(20))

// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n - 1) + fib(n - 2)
// }

// console.log(
//     fib(11)
// )

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// 1
// 2
// 3
// 4
// 5