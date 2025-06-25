const str = 'Hello World'
const vowels = ['a', 'e', 'i', 'o', 'u']
let count = { a: 0, e: 0, i: 0, o: 0, u: 0 }
console.log('Here are the vowels on :', str,)
for (let i = 0; i < str.length; i++) {
  const ch = str[i].toLowerCase();
  if (vowels.includes(ch)) {
    count[ch]++;
  }
}
//this is optinal ↓
// the first part is loop to check on the vowels array 
// the 2nd part if the vowels are there show it if not then dont show anything 

// for (let i1 = 0; i1 < vowels.length; i1++) {
//     const ch = vowels[i1];
//     if (count[ch] > 0) {
//         console.log(ch, count[ch])
//     }
// }
console.log(count)