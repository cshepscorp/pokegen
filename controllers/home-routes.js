const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');

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
          const pokemons = dbPokemonData.map(pokemon => pokemon.get({ plain: true }));
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
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize the data
      const pokemons = dbPokemonData.get({ plain: true });
      // pass data to template
      res.render('single-pokemon', {
        pokemons,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;