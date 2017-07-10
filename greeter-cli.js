const greeter = require('./src/greeter');
const name = process.argv[2];
console.log(greeter(name));
