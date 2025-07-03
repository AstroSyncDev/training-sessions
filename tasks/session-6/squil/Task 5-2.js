let arr = [];
let l = 0;
let password = [];
do {
    arr = []
    l = 0
    password = []
    // WrongPassword = []
    for (let n = 0; n < 8; n++) {
        let x = Math.floor(Math.random() * 26) + 97;
        arr.push(x)
    };
    for (let n = 0; n < arr.length; n++) {
        let char = String.fromCharCode(arr[n]);
        if (password.includes(char)) {
            l++
        }
        password.push(char)

    }
    console.log(password.join(''))
    console.log('number of repetitions', l);
    if (l === 0) {
        console.log('accepted password is ', password.join(''));
    }

} while (l > 0);





// // let arr = [0,1,2,3,4,5,6,7,8];

//   let array = arr;
//     array.splice(2,2)

// console.log(array); logs the same after the splice
// console.log(arr); logs the same after the splice
// reference issue 
