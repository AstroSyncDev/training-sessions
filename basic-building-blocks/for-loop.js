// Syntax:
// for (initialization; expression; increment/decrement) {
//   // code to repeat
// }


// print numbers from 1 to 5

// 1) take this counter variable.
// 2) give it an initial value of 1
// 3) check if condition is satisfied. (counter <= 5): 1 <= 5 [true]
// 4) if 3 true, then go to step 5. otherwise terminate loop
// 5) ok. now execute the block of code: console.log(counter) [1]
// 6) perform a calculation on counter. (increase the value of counter by 1)
// 7) ok. now move back to step 3
// 3 (2)) check if condition is satisfied. (counter <= 5): 2 <= 5 [true]
// 4 (2)) if 3 true, then go to step 5. otherwise terminate loop
// 5 (2)) ok. now execute the block of code: console.log(counter) [2]
// 6 (2)) perform a calculation on counter. (increase the value of counter by 1)
// 7 (2)) ok. now move back to step 3
// 3 (3)) check if condition is satisfied. (counter <= 5): 3 <= 5 [true]
// 4 (3)) if 3 true, then go to step 5. otherwise terminate loop
// 5 (3)) ok. now execute the block of code: console.log(counter) [3]
// 6 (3)) perform a calculation on counter. (increase the value of counter by 1)
// 7 (3)) ok. now move back to step 3
// 3 (4)) check if condition is satisfied. (counter <= 5): 4 <= 5 [true]
// 4 (4)) if 3 true, then go to step 5. otherwise terminate loop
// 5 (4)) ok. now execute the block of code: console.log(counter) [4]
// 6 (4)) perform a calculation on counter. (increase the value of counter by 1)
// 7 (4)) ok. now move back to step 3
// 3 (5)) check if condition is satisfied. (counter <= 5): 5 <= 5 [true]
// 4 (5)) if 3 true, then go to step 5. otherwise terminate loop
// 5 (5)) ok. now execute the block of code: console.log(counter) [5]
// 6 (5)) perform a calculation on counter. (increase the value of counter by 1)
// 7 (5)) ok. now move back to step 3
// 3 (6)) check if condition is satisfied. (counter <= 5): 6 <= 5 [false]
// 4 (6)) if 3 true, then go to step 5. otherwise terminate loop

// for (var counter = 1; counter <= 5; counter = counter + 1) {
//     // put any code in here.
//     console.log(counter);
// }
// console.log('loop terminated.')


// print numbers from 5 to 1
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// let colors = ["Red", "Green", "Blue"];
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])


// loop through an array (printing colors on the screen)
// let colors = ["Red", "Green", "Blue"];

// for (let i = 0; i <= 2; i++) {
//     console.log(colors[i]);
// }

// Print all even numbers from 1 to 20
// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// first solution
// for (let n = 1; n <= 10; n++) {
//     console.log(n * 2)
// }

// second solution
// for (i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// tries at the second solution
// let i;
// var z = i % 2 === 0;
// for (i = 1; i <= 20; i++) {
//     console.log(z = i % 2 === 0)
//     if (z === true) {
//         console.log(i)
//     }
// }

// let i;
// var z = i % 2 === 0;
// console.log(z)
// for (i = 1; i <= 20; i++) {
//     var z = i % 2 === 0
//     if (z === true) {
//         console.log(i)
//     }
// }

// for (i = 1; i <= 20; i++) {
//     // var z = i % 2 === 0
//     if ((i % 2 === 0) === true) {
//         console.log(i)
//     }
// }

