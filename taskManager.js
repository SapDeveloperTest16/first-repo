const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

// Promise function
function getUsersPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

module.exports = { getUsersPromise };