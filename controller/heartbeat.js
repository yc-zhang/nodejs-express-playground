let express = require('express');
let router = express.Router();

router.get('/heartbeat', function (req, res) {
    res.json({ message: 'OK' });
});

module.exports = router;
