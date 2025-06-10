// arithmetic expressions

const sum = (2 + 5) / 3;
console.log(sum)

// relational expressions

const isGreaterThan = 2 > 3;
console.log(isGreaterThan)
const isGreaterThanEquals = 2 >= 3;
console.log(isGreaterThanEquals)
const isLessThanEquals = 2 <= 3;
console.log(isLessThanEquals)

const result = (2 > 5) === true
console.log(result)

// logical expressions

// logical NOT (!) - exclamation
const val = false;
console.log(val, !val)

// logical AND (&&) - ampersand
// if either or both are false, then the result is false
// if both are true, then the result is also true
const age = 18
const birthYear = 2000
console.log(
    'result',
    (age > 15) && (birthYear === 2001)
)

// logical OR (||) - pipe symbol
// if either is true, then result is true,
// if both are false, then result is false
const isRich = false;
const hasCar = false;
console.log(
    'eligible for loan',
    isRich || hasCar
)

// complex expression

console.log(
    ((2 > 3) && (5 === 10)) || !(10 === 10)
)

// not equal to operator

console.log(5 == 10)
console.log(5 === 10) // always use this one

console.log(5 != 10)
console.log(5 !== 10) // always use this one