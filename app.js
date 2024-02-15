// core or buit in modules
// one built in module is path
//used to handle file paths and directories
//path properties
const { log } = require('console');
const path = require('path')  //syntax for including path modules
console.log(path.basename(__filename)); //app.js
console.log(path.extname(__filename)); //.js
console.log(path.dirname(__filename)); //C:\Users\aqila\OneDrive\Desktop\Softroniics\Node js

//parse - return a object
console.log(path.parse(__filename));
//   {
//     root: 'C:\\',
//     dir: 'C:\\Users\\aqila\\OneDrive\\Desktop\\Softroniics\\Node js',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }


console.log(path.join(__dirname,"api","script.js"));
//C:\Users\aqila\OneDrive\Desktop\Softroniics\Node js\api\script.js

