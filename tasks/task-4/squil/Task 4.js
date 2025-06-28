let n;
let days = ['Sunday:', 'Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:'];
let activities = ['eating', 'coding', 'sleeping'];
const now = new Date();
const day_Of_Week = now.getDay();

for (let n = 0; n < days.length; n++) {

    if (n === 0 || n === 6) {
        activities[1] = 'Gaming'
    } else {
        activities[1] = 'coding'
    };
    // if (n === day_Of_Week) {
    //     console.log(days[n], '(Today)', '\n', '-', activities[0], '\n', '-', activities[1], '\n', '-', activities[2])

    // } else {
    //     console.log(days[n], '\n', '-', activities[0], '\n', '-', activities[1], '\n', '-', activities[2])
    // }
    console.log(days[n], n === day_Of_Week ? '(Today)' : '', '\n', '-', activities[0], '\n', '-', activities[1], '\n', '-', activities[2])
}

// camelcase : dayOfWeek
// underscore: day_of_week
// capital camelcase: DayOfWeek
// you wrote: day_Of_week (wrong, no standard)