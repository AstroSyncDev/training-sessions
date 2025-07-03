let rejectedPasswords = []
let acceptedPassword
let hasRepeat = true
// Generates a random 8 letters password (only containing alphabets a-z)
do {
    let Password = ''
    let p = 0
    while (p < 8) {
        let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        Password += char;
        p++
    }
    // After the password is generated, check how many repeated characters does the password have
    let Check = {};
    hasRepeat = false;
    for (let r = 0; r < Password.length; r++) {
        let ch = Password[r];
        if (Check[ch]) {
            hasRepeat = true
            break;
        }
        Check[ch] = true;
    }
    // Repeat step 1 & 2 until you get a password that has zero repeated characters.
    hasRepeat ? rejectedPasswords.push(Password) : acceptedPassword = Password;
    // Print all the passwords that were rejected (with repetitions) and finally the accepted password (without repetitions).
} while (hasRepeat)
console.log('Rejected passwords with repeated characters:');
for (let rj = 0; rj < rejectedPasswords.length; rj++) {
    console.log(rejectedPasswords[rj])
}
console.log('\nAccepted password with no repeated characters:');
console.log(acceptedPassword);
