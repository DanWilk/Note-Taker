const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const { notes } = require('../../db/db.json');
const { createNote, validateNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid()

    if (!validateNote) {
        res.status(400).send('The Note is not correct');
    } else notes = createNote(req.body, notes);
    res.json(notes);
})

router.delete('/notes:id', (req, res) => {
    deleteNote(req.params.id, notes);

    let results = notes;
    res.json(results);
})

module.exports = router;