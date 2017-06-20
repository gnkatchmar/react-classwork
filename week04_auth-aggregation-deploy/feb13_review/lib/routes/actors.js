const router = require('express').Router();
const Actor = require('../models/actor');

module.exports = router
    .get('/', (req, res, next) => {
        Actor.find()
            .then(actors => res.send(actors))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Actor.findById(req.params.id)
            .populate({ path: 'awards', select: '-_id' })
            .lean()
            // TODO: check !actor and send 404
            .then(actor => res.send(actor))
            .catch(next);
    });