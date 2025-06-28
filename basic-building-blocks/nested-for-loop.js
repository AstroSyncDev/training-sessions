// Syntax:
// for (initialization; expression; increment/decrement) {
// 	// before 2nd loop
// for (initialization; expression; increment/decrement) {
//   	// code to repeat
// }
// // after 2nd loop
// }

// const arr = [1, 2, 3, 4, 5]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// const matrix = [
//     [1, 2, 3, 4, 10],
//     [5, 6],
//     [9, 10, 11, 12, 30],
//     [41, 42, 43],
//     [41, 42, 43, 44, 45],
//     [41],
// ]

// // console.log(matrix[0][0])
// // console.log(matrix[0][1])
// // console.log(matrix[0][2])
// // console.log(matrix[0][3])
// // console.log(matrix[1][0])
// // console.log(matrix[1][1])
// // console.log(matrix[1][2])
// // console.log(matrix[1][3])
// // console.log(matrix[2][0])
// // console.log(matrix[2][1])
// // console.log(matrix[2][2])
// // console.log(matrix[2][3])

// for (let row = 0; row <= 2; row++) {
//     // console.log(matrix[row][0])
//     // console.log(matrix[row][1])
//     // console.log(matrix[row][2])
//     // console.log(matrix[row][3])

//     for (let col = 0; col <= 3; col++) {
//         console.log(matrix[row][col])
//     }
// }


// const shirts = ["Red Shirt", "Blue Shirt"];
// const pants = ["Jeans", "Shorts", "Joggers"];

// for (let i = 0; i < shirts.length; i++) {

//     for (let j = 0; j < pants.length; j++) {
//         console.log(`Outfit: ${shirts[i]} + ${pants[j]}`);
//     }

// }

// Outfit: Red Shirt + Jeans
// Outfit: Red Shirt + Shorts
// Outfit: Read Shirt + Joggers
// Outfit: Blue Shirt + Jeans
// Outfit: Blue Shirt + Shorts
// Outfit: Blue Shirt + Joggers

// var count = 0

// for (let minute = 0; minute <= 60; minute++) {
//     for (let second = 0; second < 60; second++) {
//         // console.log('minute', minute, 'second', second)
//         for (let milisecond = 0; milisecond < 1000; milisecond++) {
//             // console.log('minute', minute, 'second', second, 'milisecond', milisecond)
//             count++;
//         }
//     }
// }
// console.log('finished execution in', count, 'iterations')

// total number of iterations:
// 1000 * 60 * 60 = 3,600,000 (wrong)
// 1000*59*60
// 1000 * 60 * 61 = 3,660,000


// ctrl + j (to open terminal)
// ctrl + c (to force stop program)
// minute 0 second 0 millisecond 0
// minute 0 second 0 millisecond 1
// minute 0 second 0 millisecond 2
// minute 0 second 0 millisecond 3
// minute 0 second 0 millisecond 4
// ...
// minute 0 second 0 millisecond 998
// minute 0 second 0 millisecond 999
// minute 0 second 1 millisecond 0
// minute 0 second 1 millisecond 1
// minute 0 second 1 millisecond 2
// ...
// minute 0 second 1 millisecond 998
// minute 0 second 1 millisecond 999
// ...
// minute 0 second 59 millisecond 999
// ...
// minute 1 second 0 millisecond 0
// ...
// minute 59 second 59 millisecond 999

// minute 60 second 49 (wrong)

// cd basic-building-blocks
// node nested-for-loop.js


for (i = 1; i < 11; i++) {
    console.log('value of i', i)
    for (j = 10; j < 51; j = j + 10) {
        if ((i === 5 || i === 7) && j === 40) {
            break;
        }
        console.log('value of j', j)
    }
}
