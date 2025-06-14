let day = 2;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
    case 3:
        dayName = "Wednesday";
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
    case 6:
        dayName = "Saturday";
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}

console.log("Today is: " + dayName);
