function sayHello() {
    console.log("Hellloooo");
}
//exporting 
module.exports = sayHello


//anonymous fn
const hai = function() {
    console.log("haiiii");
}
module.exports = hai

const user = {
    name: "John",
    place: "pkd",
    greet: function() {
        console.log(`I am ${this.name} from ${this.place}`);
    },
    message: function() {
        console.log(`Welcome ${this.name}`);
    }
}
module.exports = user;