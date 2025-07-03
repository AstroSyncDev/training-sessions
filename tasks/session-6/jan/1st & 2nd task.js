//In javascript, write a program of your choice using do-while loop

const stars = ['*', '**', '***', '****', '*****']
let i = 4
do {
  (console.log(stars[i]));
  i--
} while (i >= 0)
// Write a program in javascript to print the following pattern using a nested loop
for (let i = 0; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}