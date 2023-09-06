const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    await fsPromises.unlink(path.join(__dirname, "files", "Newreply.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newdata);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//! This is called callback hell do not do this
//* This is used to asynchronously read and write files in order what you would do is to put the next code in the callback but this method id depreciated
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\n.Yes it is",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "Newreply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

// fs.appendFile(path.join(__dirname, "files", "test.txt"), "Testing ", (err) => {
//   if (err) throw err;
//   console.log("Append complete");
// });

process.on("uncaughtException", (err) => {
  console.log(`There was an error ${err}`);
});
