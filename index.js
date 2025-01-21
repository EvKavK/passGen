// Name: Evan Kavanagh
// Date: January 20th, 2025
// Purpose: A simple, random lower-case password generator with error handling.

// Things to add: (maybe run command), help command, lower command, upper command, special command, length command (8-16)
// -lower, upper, and special will enable/disable lowercase, uppercase, and certain special characters in password generation
// -length will allow the user to create longer passwords, at the lowest 8 characters, at the highest 16 characters
// Bugs to consider:
// -if lower, upper, and special are disabled, will the password break or just add nothing? either way, an error message should appear.
// if everything is working accordingly, congrats! you're done! :D

const process = require("process");
const args = process.argv.slice(2);

if (args.includes("--help")) {
    help()
};

if (args.includes("--lower")) {
    lower()
};

if (args.includes("--upper")) {
    upper()
};

if (args.includes("--special")) {
    special()
};

if (args.includes("--length")) {
    length()
};

function passGen() {
    let passLength = 8;
    const passLowAlph = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    for (let i = 0; i < passLength; i++) { 
        password += passLowAlph[Math.floor(Math.random() * passLowAlph.length)]
    }
    return password;
};

console.log(passGen());


function help() {
    console.log("|---------------------------------------------------------------------------------------|");
    console.log("|                                                                                       |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░      ░▒▓███████▓▒░░▒▓█▓▒░                |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░                |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░                |");
    console.log("|            ░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓█▓▒░      ░▒▓███████▓▒░░▒▓█▓▒░                |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░                |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░                             |");
    console.log("|            ░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░      ░▒▓█▓▒░                |");
    console.log("|                                                                                       |");
    console.log("|---------------------------------------------------------------------------------------|");
    console.log("|                                                                                       |");
    console.log("| --help    - Displays the help menu (you are here!)                                    |");
    console.log("| --lower   - Enables and/or disables lowercase characters in password generation.      |");
    console.log("| --upper   - Enables and/or disables uppercase characters in password generation.      |");
    console.log("| --special - Enables and/or disables special characters in password generation.        |");
    console.log("| --length  - Adjusts the length of the password from anywhere between 8-16 characters. |");
    console.log("|                                                                                       |");
    console.log("|---------------------------------------------------------------------------------------|");
};

