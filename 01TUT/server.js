console.log("Hello World");

// Global Object
// console.log(global);

// 4) Has Common modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch
const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");

console.log(add(6, 6));
console.log(multiply(6, 6));
console.log(subtract(6, 6));
console.log(divide(6, 6));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
