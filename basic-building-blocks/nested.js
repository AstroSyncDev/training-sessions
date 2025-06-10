/**

if (expression1) {
    if (expression2) {
        // do something if both expression1 and expression2 result in true
    }
} else if (expression3) {
    // do something if expression1 is false and expression3 results in true
} else {
    // do something else if all the above first-level expressions are false
}

 */

// const age = 18;
// const birthYear = 2001;

// if (age >= 18) {
//     console.log('age is greater than or equals 18')
//     if (birthYear === 2000) {
//         console.log('age is greater than or equals 18, AND birthYear equals 2000')
//         console.log("You can vote");
//     } else {
//         console.log('age is greater than or equals 18, BUT birthYear not equals 2000')
//         console.log("You cannot vote");
//     }
// } else {
//     console.log('age is lower than 18')
//     console.log("You cannot vote");
// }

const age = 20;
const hasID = true;
const hasWeapon = true;

if (age >= 18) {
    if (hasID) {
        if (!hasWeapon) {
            console.log('You are allowed to enter.')
        } else {
            console.log('You must not have a weapon to enter.')
        }
    } else {
        console.log("You must show your ID to enter.");
    }
} else {
    console.log("You are not old enough to enter.");
}

// optimization/simplication of the above

if (age < 17) {
    console.log('You are not old enough to enter.')
    return; //  terminate execution
}
if (!hasID) {
    console.log("You must show your ID to enter.");
    return; //  terminate execution
}
if (hasWeapon) {
    console.log('You must not have a weapon to enter.')
    return; //  terminate execution
}

console.log('You are allowed to enter.')