// const age = 15;
// var canVote;

// if (age >= 18) {
//     canVote = 'Yes'
// } else {
//     canVote = 'No'
// }

// console.log('if,else result:', canVote)

const age = 18;
const hasID = true
const hasWeapon = false

const canEnter = (age >= 18) ? (hasID ? (hasWeapon ? 'Cannot Enter' : 'Can Enter') : 'Cannot Enter') : "Cannot enter"

console.log('Result:', canEnter);