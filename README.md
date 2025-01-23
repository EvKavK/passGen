# PassGen

## Introduction

Before you is a simple password generator that operates in CLI (Command-Line Interface), utilizing arguments in order to accomplish this goal. Node.js is required for this program, so please ensure that you have it installed before using!

## How to Use

Run the following command in your terminal:
```sh
node index.js [arguments]
```

The arguments section is interchangeable with any of the following commands in the next section. When generating a password, the password will always use lowercase letters by default.

## Arguments/Commands

### --help:
This command will open up the help menu - using this command will also prevent a password from being generated, so any other commands will effectively be ignored. The help menu can provide a clear and concise list of valid arguments for this program that you can access at any point in time.

**Example:**
```sh
node index.js --help
```
**Result:** (help menu)

### --upper:
This command will enable uppercase letters (i.e. ABCD) to be included in the password you generate.

**Example:**
```sh
node index.js --upper
```
**Result:** fWfjeAQm

### --special:
This command will enable special characters (i.e. @#$?) to be included in the password you generate.

**Example:**
```sh
node index.js --special
```
**Result:** afv?qwe#

### --number:
This command will enable numbers (i.e. 1234) to be included in the password you generate.

**Example:**
```sh
node index.js --number
```
**Result:** f289tf19

### --length (#):
Length works a little differently compared to the other previous commands. Where as other commands just required you to input them and nothing else alongside them, --length requires you to input a number between 6-16 to actually work as intended. This command allows you to adjust the length of the password you want to generate, with the length being at the lowest 6 and at the highest 16.

**Example:**
```sh
node index.js --length 12
```
**Result:** gjwomajsuemt

### Important Notice:
Any command can be used alongside one another, so you can mix and match arguments to whatever your preference is when generating a password.

**Example:**
```sh
node index.js --upper --length 7 --number --special
```

**Result:** 12Fe#?6