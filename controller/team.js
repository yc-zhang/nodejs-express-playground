let express = require('express');
let router = express.Router();
let {Team} = require('../model');

router.get('/team', function (req, res) {
    // TBD
    Team.findAll().then(a => console.log(a));
    res.json({ message: 'hooray! the team.' });
});

module.exports = router;
