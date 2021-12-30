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

// const idCreate = (notes) => {
//     let id = notes.length - 1
//     for (let i = 0; i < notes.length; i++) {
//         if (id === notes[i].id) {
//             id += 10;
//         } 
//     }
// }

module.exports = {
    createNote,
    validateNote
}