// for (let count = 1; count <= 5; count++) {
//     console.log("Count is: " + count);
// }

// let count = 1;

// while (count <= 5) {
//     console.log("Count is: " + count);
//     count++;
// }


let currentRoll;

let rolls = 0;

while (currentRoll !== 6) {
    // generate a random value between 1 to 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    currentRoll = randomNumber
    rolls++;
}

console.log(`You rolled a 6 after ${rolls} tries`)

// const fractionalRandom = Math.random() * 6;
// const singleDigit = Math.floor(fractionalRandom)
// // generating numbers between 0 and 5
// // we don't need 0, and we need 6
// const numBw1And6 = singleDigit + 1
// console.log(numBw1And6)

// //pseudorandom
// // between 0 (inclusive) and 1 (exclusive) (nothing else)