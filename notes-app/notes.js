const fs = require("fs");

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
    console.log("New Note Added");
  } else {
    console.log("Note Title Taken");
  }
};

const removeNote = function(title) {
  console.log("Remove note:", title);
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
