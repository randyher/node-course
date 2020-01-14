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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});
//

//Create Remove Command
yargs.command({
  command: "remove",
  describe: "Removes a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});
//

//Create List Command
yargs.command({
  command: "list",
  describe: "List out all note",
  handler() {
    notes.listNotes();
  }
});
//

//Create Read Command
yargs.command({
  command: "read",
  describe: "Reading note",
  handler() {
    console.log("Read a note!");
  }
});
//

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
