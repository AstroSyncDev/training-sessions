/**
 * 
 if (expression1) {
    // do something if only expression1 results in true
} else if (expression2) {
    // do something if expression1 is false and expression2 results in true
} else {
    // do something else if all the above expressions are false
}

 */

// just so you know, temp is in celcius. like normal humans use it
const temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("The weather is nice.");
} else if (temperature >= 10 && temperature < 20) {
    console.log("It's a bit chilly.");
} else {
    console.log("It's cold outside.");
}

