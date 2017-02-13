var express = require('express');
var router = express.Router();

router.get('/team', function (req, res) {
    res.json({ message: 'hooray! the team.' });
});

module.exports = router;
