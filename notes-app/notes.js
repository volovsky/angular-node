const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    
    const duplicateNotes = notes.find((note) => note.title === title);
    
    debugger;
    
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log("New note would be added");        
    } else {
        console.log("Duplicate note");
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes();
    
    const newNotesArray = notes.filter((note) => {
        return note.title !== title;
    })
    
    if (newNotesArray.length === notes.length ) {
        console.log(chalk.red("No such note"));
    } else {
        console.log(chalk.green("Note removed")); 
        saveNotes(newNotesArray);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if ( notes.length > 0 ){
        console.log(chalk.inverse("Notes List"));
        notes.forEach((note)=> {
            console.log(note);
        })
    } else {
        
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find(note => note.title === title);
    if (noteFound) {
        console.log("Note: " + noteFound.title + " " + noteFound.body);
    } else {
        console.log("No such note found");        
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNotes:   addNotes,
    removeNote: removeNote,
    listNotes:  listNotes,
    readNote:   readNote
}