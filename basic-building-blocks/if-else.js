// conditional statements: if-else
/**
 * 
Syntax:

if (expression) {
    // do something if expression results in true
} else {
    // do something else if condition results in false
}

Note: the expression should be relational or logical, should result in a boolean outcome

 */

const age = 18;
const birthYear = 2000;

if (age >= 18 && birthYear === 2000) {
    // if-block
    console.log("You can vote");
} else {
    // else-block
    console.log("You cannot vote");
}
const Bankbalance = 3000;
if (Bankbalance > 5000) {
    console.log('You can withdraw')
    // /^ 3
    // consloe.log('You can withdraw')
}
else {
    console.log('you cannot withdrow')
}

// my على is shaheer (compiler error)
// my is name shaheer (runtime error)
// const age = 'softy' (logical error)

const car = 'mercedes'
var sellingPrice;

if (car === 'bmw') {
    sellingPrice = 10000;
} else {
    sellingPrice = 0;
}

console.log('Selling price of', car, 'is $', sellingPrice)
