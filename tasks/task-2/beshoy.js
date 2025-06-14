const age = 22;
const isStudent = true;
const isWeekend = false;

if (age < 5) {
    console.log('ticket is free')
}
else if (age >= 60) {
    console.log("ticket cost=", 12 * 0.5)
}
else if (isStudent === true && isWeekend === false) {
    console.log('ticket cost=', 12 * 0.7)
}
else {
    console.log('ticket cost=', 12)
}
