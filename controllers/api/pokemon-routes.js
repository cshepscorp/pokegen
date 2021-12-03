const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Pokemon } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/pokemon  retrieves data on all pokemon within the pokemon table.
router.get('/', (req, res) => {
  Pokemon.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPokemonData => res.json(dbPokemonData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/pokemon/:id retrieves data on a single instance (pokemon) by ID number
router.get('/:id', (req, res) => {
  Pokemon.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPokemonData => {
    if (!dbPokemonData) {
      res.status(404).json({ message: 'No pokemon found with this id! Please enter a different id.' });
      return;
    }
    res.json(dbPokemonData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST /api/pokemon creates a new instance of a pokemon within the pokemon table.
router.post('/', withAuth, (req, res) => {
  Pokemon.create({
    name: req.body.name,
    type: req.body.type,
    type2: req.body.type2,
    move1: req.body.move1,
    move2: req.body.move2,
    move3: req.body.move3,
    move4: req.body.move4,
    ability1: req.body.ability1,
    ability2: req.body.ability2,
    ability3: req.body.ability3,
    user_id: req.session.user_id
  })
  .then(dbPokemonData => res.json(dbPokemonData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT /api/pokemon/:id edits properties of an instance of a pokemon within the pokemon table by ID.
router.put('/:id', (req, res) => {
  Pokemon.update({
    name: req.body.name,
    type: req.body.type,
    type2: req.body.type2,
    move1: req.body.move1,
    move2: req.body.move2,
    move3: req.body.move3,
    move4: req.body.move4,
    ability1: req.body.ability1,
    ability2: req.body.ability2,
    ability3: req.body.ability3,
    user_id: req.session.user_id
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(dbPokemonData => {
    if (!dbPokemonData) {
      res.status(404).json({ message: 'No pokemon found with this id! Please enter a different id.' });
      return;
    }
    res.json({ message: 'Pokemon successfully edited.', editedRows: dbPokemonData })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/pokemon/:id deletes an existing instance of a pokemon within the pokemon table by its ID.
router.delete('/:id', (req, res) => {
  Pokemon.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPokemonData => {
    if (!dbPokemonData) {
      res.status(404).json({ message: 'No pokemon found with this id, therefore no pokemon were deleted.' });
      return;
    }
    res.json({ message: 'Pokemon successfully deleted.', deletedRows: dbPokemonData });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;