const notes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");

const command = process.argv[2];

if (command === "add") {
  console.log("add");
} else if (command === "remove") {
  console.log("remove");
}
