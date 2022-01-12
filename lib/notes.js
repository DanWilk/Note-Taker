const fs = require('fs');
const path = require('path');

const createNote = (body, notes) => {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
}

const validateNote = (note) => {
    if (!note.id || typeof note.id !== 'number') {
        return false;
    } else if (!note.title || typeof note.title !== 'string') {
        return false;
    } else if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
}

const deleteNote = (noteId, notes) => {
    console.log('nope');
    for (let i = 0; i < notes.length; i++) {
        if (notes.id === noteId) {
            notes.splice(i, 1);
            console.log('yes');
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({notes}, null, 2)
            );


        }
        console.log('no');
        return true;
    }
}

module.exports = {
    createNote,
    validateNote,
    deleteNote
}