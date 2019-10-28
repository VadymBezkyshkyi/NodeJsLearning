const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
       console.log("Removing the note");
    }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
     console.log("Read a note") ;
  }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
       console.log("List the notes");
    }
});

yargs.parse();

