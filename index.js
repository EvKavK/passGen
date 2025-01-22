// Name: Evan Kavanagh
// Date: January 20th, 2025
// Purpose: A simple, random lower-case password generator with error handling.

const process = require("process");
const args = process.argv.slice(2);

const passLowAlph = "abcdefghijklmnopqrstuvwxyz";

let passLength = 8;
let passMin = 6
let passMax = 16
let lengthIndex;

let passPool = passLowAlph;

const commands = [
    "--help",
    "--length"
]

if (args.includes("--help")) {
    help()
    process.exit(1)
};

if (args.includes("--length")) {
    length()
};

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
    console.log("| --help       - Displays the help menu (you are here!)                                 |");
    console.log("| --length (#) - Adjusts the password's length from anywhere between 8-16 characters.   |");
    console.log("|                                                                                       |");
    console.log("|---------------------------------------------------------------------------------------|");
};

function length() {
    //
    lengthIndex = args.indexOf("--length");
    passLength = parseInt(args[lengthIndex + 1], 10);

    // checks if the argument ahead of --length is a valid number that adheres to the set minimum and maximum length.
    if (isNaN(passLength)) {
        console.log("Error! Invalid length! Please provide a valid number for length and try again!")
        process.exit(0)
    } else if (passLength < passMin || passLength > passMax) {
        console.log("Error! Invalid length! Please respect the character limit (6-16) and try again!")
        process.exit(0)
    };
};

function passGen() {
    args.forEach(function(arg, index) {
        // checks if the command provided is part of the command whitelist, but also ignores numbers that are not part of length.
        if (!commands.includes(arg) && (index === 0 || !args[lengthIndex + 1])) {
            console.log("Error! Invalid command! Please refer to --help in order to get a list of valid commands!")
            process.exit(0)
        };
    });

    let password = "";

    for (let i = 0; i < passLength; i++) { 
        password += passPool[Math.floor(Math.random() * passPool.length)]
    }
    return password;
};

console.log(passGen());