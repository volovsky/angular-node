const fs = require('fs');
const add = require ('./utils.js');
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//fs.writeFileSync('notes.txt', 'This file was created by node.js');

try {
  //fs.appendFileSync('message.txt', ' data to append');
  //console.log(chalk.green(add(3,7)));
  //const error = chalk.red.bgRed.bold('Error');
  //console.log(error);
  //console.log(validator.isEmail('micmic@gmail.com'));
} catch (err) {
  console.log('ERROR');
}

const command = process.argv[2];
if (command === 'add') {
    //console.log(process.argv);
    //console.log(process.argv[3]);
    //console.log(yargs.argv);
    // Input $ node app.js add --title="this is my title"
    //console.log(yargs.argv.title);
} else if (command === 'remove') {
   // console.log('remove');  
}


yargs.command({
    command:    'add',
    describe:   'Add a new note',
    builder: {
        'title':    {
            'describe': 'Note title',
            'demandOption': true,
            'type': 'string'
        },
        'body':    {
            'describe': 'Note body',
            'demandOption': false,
            'type': 'string'
        }
    },
    handler:    (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command:    'remove',
    describe:   'Remove a note',
    builder:    {
        'title':    {
            'describe': 'Note title',
            'demandOption': true,
            'type': 'string'
        }
    },
    handler:    (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:    'list',
    describe:   'List notes',
    handler:    () => {
        notes.listNotes();   
    }
})

yargs.command({
    command:    'read',
    describe:   'Read a note',
    builder:    {
        'title':    {
            'describe': 'Note title',
            'demandOption': true,
            'type': 'string'
        }
    },
    handler:    (argv) => {
        notes.readNote(argv.title);   
    }
})

//console.log(yargs.argv);

yargs.parse();
