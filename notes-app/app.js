const notes = require("./notes");

const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("1.1.0");

//Create Add Command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note content",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  }
});
//

//Create Add Command
yargs.command({
  command: "remove",
  describe: "Removes a new note",
  handler: function() {
    console.log("Removing a note!");
  }
});
//

//Create Add Command
yargs.command({
  command: "list",
  describe: "List out all note",
  handler: function() {
    console.log("List your notes!");
  }
});
//

//Create Add Command
yargs.command({
  command: "read",
  describe: "Reading note",
  handler: function() {
    console.log("Read a note!");
  }
});
//

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
