// -------- fibonacci sequence ----------

// let first = 0
// let second = 1;

// const arr = [first, second]

// for (let i = 0; i < 10; i++) {
//     const num = first + second;
//     arr.push(num)
//     first = second;
//     second = num;
// }

// console.log(arr)

// const n = 8;

// console.log(arr[n - 1])


// const n = 8;
// let first = 0;
// let second = 0;

// let output;

// for (let i = 0; i < 8; i++) {
//     first = second;
//     if (i === 1) {
//         second = 1;
//     }
//     const num = first + second;
//     second = num;
//     output = num;
//     console.log(num)
// }

// console.log(output)

// ----------- finding the divisors of a number ------------

// const num = 48;

// const divisors = []

// for (i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         divisors.push(i)
//     }

//     if (i === (num / 2)) {
//         divisors.push(num);
//         break;
//     }
// }

// console.log('Divisors of', num, 'are:', divisors)

// ------------ check whether a number is prime --------------


// let num = 5
// let y = 0;
// for (let i = 2; i < num; i++)
//     if (num % i !== 0 && num % 1 === 0 && num % num === 0) {
//         y = 1
//     } else {
//         console.log('number is not  prime');
//         console.log(num)
//         y = 0
//         break;

//     }

// if (y === 1) {
//     console.log('the number is prime')
// }

// --- optimized

// const num = 767;
// let isPrime = true;

// for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log('Number is prime')
// } else {
//     console.log('Number is not prime')
// }