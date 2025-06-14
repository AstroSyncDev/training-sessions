const age = 22;
const isStudent = true;
var isWeekend
var date = new Date()
var today = date.getDay()

if (today == 6 || today === 0) {

    isWeekend = true;
}
else {
    isWeekend = false;
}


if (age < 5) {
    console.log('ticket is free')
}
else if (age >= 60) {
    console.log("ticket cost=", 12 * 0.5)
}
else if (isStudent === true && isWeekend === true) {
    console.log('today is not weekend')
    console.log('ticket cost=', 12)

}
else if (isStudent === true && isWeekend === false) {
    console.log('ticket cost=', 12 * 0.7)
}


else {
    console.log('ticket cost=', 12)
}

