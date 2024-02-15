// core or buit in modules
// one built in module is path
//used to handle file paths and directories
//path properties
const { log } = require("console");
const path = require("path"); //syntax for including path modules
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

console.log(path.join(__dirname, "api", "script.js"));
//C:\Users\aqila\OneDrive\Desktop\Softroniics\Node js\api\script.js

const fs = require("fs");
//writing to a file
console.log(fs);
const directory = path.join(__dirname, "api");
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}
fs.writeFileSync(
  path.join(__dirname, "api", "app.js"),
  "username:gfgf",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("file written successfully");
  }
);


//append to a file
fs.appendFile(path.join(__dirname, "api", "app.js"), "\nusername: uun", 
(err) => {
    if (err) {
        throw err;
      }
      console.log("file appended successfully");
    }
)

//reading from a file
// fs.readFile(path.join(__dirname, "api", "app.js"), "utf8", 
// (err, data) => {
//     if (err) {
//         throw err;
//       }
//       console.log("file read successfully");
//       console.log(data);
//     }
// )

//unlinking (deleting) a file
// fs.unlink(path.join(__dirname, "api", "app.js"), 
// (err) => {
//     if (err) {
//         throw err;
//       }
//       console.log("file deleted successfully");
//     }
// )