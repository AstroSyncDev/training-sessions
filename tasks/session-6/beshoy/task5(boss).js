
//var alpha=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let password = '';
var count = 0;
let alphabet = '';
for (let i = 97; i <= 122; i++) {
  alphabet = alphabet + String.fromCharCode(i);//to get alphabet
}
do {
  password = ''
  count = 0
  for (let m = 0; m < 8; m++) {//to get password for 8 lettes
    x = password[m]

    const randomIndex = Math.floor(Math.random() * alphabet.length);
    password = password + alphabet[randomIndex];

  }



  for (let m = 0; m < password.length; m++) {
    x = password[m]
    for (let b = m + 1; b < password.length; b++) {
      if (password[m] === password[b]) {
        count++
        // console.log('((rejected password))')
        // console.log(password)
        // console.log('times repeated', count)
        // //console.log(password[b])

        // console.log(password)
        break;

      }
    }

  }

  if (count > 0) {
    console.log('((rejected password))')
    console.log(password)
    console.log('times repeated', count)
  } else {
    console.log('((accepted password))')
    console.log(password)
  }
}
while (count > 0)
// console.log('((accepted password))')
// console.log(password)










