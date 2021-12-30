const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../../db/db.json');
const { createNote, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString()

    if (!validateNote) {
        res.status(400).send('The Note is not correct');
    } else note = createNote(req.body, notes);
    res.json(note);
})

module.exports = router;