let express = require('express');
let router = express.Router();
let {Team} = require('../model');

router.get('/team/:id', function (req, res) {
    Team.findById(req.params.id)
        .then(team => team ? res.send(team) : res.sendStatus(404));
});

router.get('/team', (req, res) => {
    Team.findAll().then(teams => res.send(teams));
});

router.post('/team', (req, res) => {
    Team.build(req.body).save()
        .then(() => res.sendStatus(202))
        .catch(() => res.sendStatus(400));
});

module.exports = router;
