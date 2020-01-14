const fs = require("fs");
const chalk = require("chalk");

getNotes = () => {
  return "Your notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
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

const removeNote = function(title) {
  const notes = loadNotes();
  const remainingNotes = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > remainingNotes.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(remainingNotes);
  } else {
    console.log(chalk.red.inverse("No Note Found!"));
  }
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
