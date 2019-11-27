const express = require('express');
const router = express.Router();

const Weight = require('../../models/Weight');

router.get('/', (req, res) => {
  Weight.find()
    .sort({ date: -1 })
    .then(weights => res.json(weights));
});

router.post('/', (req, res) => {
  const newWeight = new Weight({
    weight: req.body.weight
  });

  newWeight.save().then(weight => res.json(weight));
});

router.delete('/:id', (req, res) => {
  Weight.findById(req.params.id)
    .then(weight => weight.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;