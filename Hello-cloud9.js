var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello Elsa!");
console.log("i is " + i);

do {
    input = readline.question("Enter a number (or 'quit' to quit): ");
    if (input === 'quit') {
        console.log('OK, exiting.')
    }
    else{
        i += Number(input);
        console.log("i is now " + i);
    }
} while (input != 'quit');

console.log("Goodbye!");
