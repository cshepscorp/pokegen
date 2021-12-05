const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');
const verifyOwner = require('../utils/verifyOwner');

router.get('/', (req, res) => {
  //console.log(req.session);
  Pokemon.findAll({

    include: [ // Instead of using complex JOIN statements with SQL, we can call on Sequelize's include option to perform the join for us.
        {
            model: User,
            attributes: ['username']
        }
        ]})
        .then(dbPokemonData => {
          const pokemons = dbPokemonData.reverse().map(pokemon => pokemon.get({ plain: true }));
          // pass post objects into the homepage template
          console.table(pokemons);
          res.render('homepage', { pokemons, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        })
  });



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

router.get('/pokemon/:id', (req, res) => {
    Pokemon.findOne({
      where: {
        id: req.params.id,
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
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize the data
      const pokemons = dbPokemonData.get({ plain: true });
      
      // verifies that session owner is the same owner as a particular pokemon
      const owner = verifyOwner(req.session.user_id, pokemons.user_id);

      // renders single pokemon card
      res.render('single-pokemon', {
        pokemons,
        loggedIn: req.session.loggedIn,
        owner
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;