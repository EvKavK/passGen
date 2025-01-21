// Name: Evan Kavanagh
// Date: January 20th, 2025
// Purpose: A simple, random lower-case password generator with error handling.

function passGen() {
    let length = 8;
    const passLowAlph = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    for (let i = 0; i < length; i++) { 
        password += passLowAlph[Math.floor(Math.random() * passLowAlph.length)]
    }
    return password;
};

console.log(passGen());