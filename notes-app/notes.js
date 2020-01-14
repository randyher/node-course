const fs = require("fs");
const chalk = require("chalk");

getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log(chalk.red.inverse("Note Title Taken"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const remainingNotes = notes.filter(note => note.title !== title);

  if (notes.length > remainingNotes.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(remainingNotes);
  } else {
    console.log(chalk.red.inverse("No Note Found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes:"));
  notes.forEach(note => console.log(note.title));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNotes = title => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title);

  if (foundNote) {
    console.log(chalk.blue(foundNote.title));
    console.log(chalk.blue(foundNote.body));
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
