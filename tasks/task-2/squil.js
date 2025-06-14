const age = 40;
const isstudent = true
const price = 12
const now = new Date();
const dayOfWeek = now.getDay();
const isweekend = false

const basePrice = 12;
var discount = 0;

if (age <= 5) {
    discount = 1
} else if (age >= 60) {
    discount = discount + 0.5
}

if (isstudent && isweekend === false) {
    discount = discount + 0.3
}

const discountedPrice = basePrice - (basePrice * discount)

console.log('YOUR TICKET PRICE IS', discountedPrice)

// if (age >= 60);{
//         if (isstudent);{
//             if (isweekend);{
//             { ticektprice = price * 0.2 }}}}
//             else {}


// variable names standards
/**
 * - underscore based: is_student (common)
 * - camelcase based: isStudent (common)
 * - capital camelcase based: IsStudent (rarely used, mostly for classes)
 * - capital underscore: IS_STUDENT (used in special occasions)
 * 
 * 
 * 
 */