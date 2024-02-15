
// let sayHello = require('./localModules');
// sayHello();

// let hai = require('./localModules');
// hai();

let user = require('./localModules');
console.log(user.name);
console.log(user.place);
user.greet();
user.message();