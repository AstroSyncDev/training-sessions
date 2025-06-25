var input = ('Suck My DIck')
let n;
let vowel_count = 0;
let vowels_count = {
    a: 0,
    u: 0,
    o: 0,
    i: 0,
    e: 0,
}
let vowels = ['a', 'e', 'i', 'o', 'u'];
// do a loop that changes the index number and then put it in an if statment that compares it to a vowels array ?? 
// and depends wether it matches or not ad to a value of seperate vowel count 
// console.log(input[1])
// if(vowels.includes(input[1]))
// {
//     console.log ('true')
// }
for (let n = 0; n <= input.length; n++) {
    if (vowels.includes(input.toLowerCase()[n])) {
        vowel_count++;
        // if (input[n] === 'a') {
        //     a_count++;
        // }
        // else if(input[n]=== 'e'){
        //     e_count++;
        // }
        // else if (input[n]=== 'i'){
        //     i_count++;
        // }
        // else if(input[n]=== 'o'){
        //     o_count++;
        // }
        // else if(input[n]=== 'u'){
        //     u_count++;
        // }
        switch (input.toLowerCase()[n]) {
            case 'a':
                vowels_count.a++
                break;
            case 'e':
                vowels_count.e++
                break;
            case 'i':
                vowels_count.i++
                break;
            case 'o':
                vowels_count.o++
                break;
            case 'u':
                vowels_count.u++
                break;
        }
    }

}
console.log(vowels_count)
console.log('The total count of vowels in the string is', vowel_count,)