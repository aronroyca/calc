#!/usr/bin/env node
const yargs = require('yargs');

var arguments = process.argv;

// console.log(arguments);
if (arguments.length === 2) {
    console.log(`
    This is a command line calculator:

    Flag 1 - Supported operations
      -add -subtract -multiply -divide
      
    Flag 2 and 3 are numbers to be operated on

     ex. calc multiply 2 3
        --outputs 6`)
} else if (arguments[2].toLowerCase() === 'add') {
    console.log(parseInt(arguments[3]) + parseInt(arguments[4]));
} else if (arguments[2].toLowerCase() === 'subtract') {
    console.log(parseInt(arguments[3]) - parseInt(arguments[4]));
} else if (arguments[2].toLowerCase() === 'multiply') {
    console.log(parseInt(arguments[3]) *  parseInt(arguments[4]));
} else if (arguments[2].toLowerCase() === 'divide') {
    console.log(parseInt(arguments[3]) / parseInt(arguments[4]));
} else {
    console.log(`${arguments[2]} operation not recognized`)
}



