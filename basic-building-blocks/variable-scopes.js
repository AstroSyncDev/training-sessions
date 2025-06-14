const age = 5;

// global-scope variable
const isStudent = true

if (age > 4) {
    // local-scope variable
    const ticketPrice = 10
} else {
    const test = 8
}

console.log(ticketPrice)