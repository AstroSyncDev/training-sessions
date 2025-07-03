// In javascript, write a program of using a loop to find the sum of first N positive integers.
let n = 10;
let sum = 0;
let i = 1;

do {
    sum += i;
    console.log(i, '+', sum - i, '=', sum)
    i++;
} while (i <= n);
console.log("Sum of first", n, "positive integers is:", sum);