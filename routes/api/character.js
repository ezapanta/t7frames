const express = require('express');
const router = express.Router();
const Characters = require('../../character_template');

// GETs all Characters
router.get('/', (req, res) => {
    res.json(Characters);
    // express takes care of the stringify for you
});

// GET one Character based on ID
router.get('/:id', (req, res) => {
    const found = Characters.some(Character => Character.id === parseInt(req.params.id))
    if(found) {
        res.json(Characters.filter(Character => Character.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No character with id number ${req.params.id}` })
    }
});

module.exports = router;