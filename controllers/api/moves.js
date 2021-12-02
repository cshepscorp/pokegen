const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Pokemon, Move } = require('../../models');

// GET /api/moves retrieves data on all moves within the moves table.
router.get('/', (req, res) => {
  Move.findAll({
    include: [
      {
        model: Pokemon,
        attributes: ['name', 'type', 'type2', 'ability1', 'ability2', 'ability3', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbMoveData => res.json(dbMoveData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/moves/:id retrieves data on a single instance (move) by ID number
router.get('/:id', (req, res) => {
  Move.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Pokemon,
        attributes: ['name', 'type', 'type2', 'ability1', 'ability2', 'ability3', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbMoveData => {
    if (!dbMoveData) {
      res.status(404).json({ message: 'No move found with this id! Please enter a different id.' });
      return;
    }
    res.json(dbMoveData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST /api/moves creates a new instance of a move within the moves table.
router.post('/', (req, res) => {
  Move.create({
    name: req.body.name,
    power: req.body.power,
    description: req.body.description,
    power_points: req.body.power_points,
    pokemon_id: req.body.pokemon_id
  })
  .then(dbMoveData => res.json(dbMoveData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT /api/moves/:id edits properties of an instance of a move within the moves table by ID.
router.put('/:id', (req, res) => {
  Move.update({
    name: req.body.name,
    power: req.body.power,
    description: req.body.description,
    power_points: req.body.power_points,
    pokemon_id: req.body.pokemon_id
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(dbMoveData => {
    if (!dbMoveData) {
      res.status(404).json({ message: 'No move found with this id! Please enter a different id.' });
      return;
    }
    res.json({ message: 'Move successfully edited.', editedRows: dbMoveData })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/moves/:id deletes an existing instance of a move within the moves table by its ID.
router.delete('/:id', (req, res) => {
  Move.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbMoveData => {
    if (!dbMoveData) {
      res.status(404).json({ message: 'No move found with this id, therefore no moves were deleted.' });
      return;
    }
    res.json({ message: 'Move successfully deleted.', deletedRows: dbMoveData });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;