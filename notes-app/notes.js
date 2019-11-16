const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
   const notes = loadNotes();
   const duplicateNote = notes.find((note) => note.title === title);

   debugger

   if(!duplicateNote) {
      notes.push({
         title: title,
         body: body
      });
      saveNotes(notes);
      console.log('New note added');
   } else {
      console.log('Note title taken!');
   }

};

const removeNote = (title) => {
   const notes = loadNotes();
   const resultNotes = notes.filter((note) => {
      if(note.title === title) { console.log(`Note with title ${note.title} was removed`) }
      return note.title !== title;
   });
   saveNotes(resultNotes);
};

const listNotes = () => {
   const notes = loadNotes();
   console.log(chalk.blue("Your notes: "));
   notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
   const notes = loadNotes();
   const note = notes.find((note) => note.title === title);

   if(note) {
      console.log(chalk.blue(note.title));
      console.log(chalk.green(note.body));
   } else {
      console.log(chalk.red("No note found."));
   }
};




const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJsON);
};

const loadNotes = () => {
   try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   } catch(e) {
      return [];
   }
};



module.exports = {
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNote: readNote
};
