const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');
const verifyOwner = require('../utils/verifyOwner');

router.get('/', (req, res) => {
  Pokemon.findAll({
    include: [ 
        {
            model: User,
            attributes: ['username']
        }
        ]})
        .then(dbPokemonData => {
          const pokemons = dbPokemonData.reverse().map(pokemon => pokemon.get({ plain: true }));
          // console.table(pokemons);
          res.render('homepage', {
            pokemons,
            loggedIn: req.session.loggedIn,
            user: req.session.user_id,
            currentUser: req.session.username
          });
          console.log(req.session.username);
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

router.get('/userChanges', (req, res) => {
  res.redirect('/userChanges');
  res.render('userChanges');
});

router.get('/users/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id,
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id.' });
        return;
      }
      if (dbUserData.id != req.session.user_id) {
        res.redirect("/");
        return;
      }
      // serialize the data
      const users = dbUserData.get({ plain: true });

    res.render('edit-users', {
      users,
      user: req.session.user_id,
      loggedIn: req.session.loggedIn,
      currentUser: req.session.username
    });
  });
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
        owner,
        user: req.session.user_id,
        currentUser: req.session.username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/find-users', (req, res) => {
    User.findAll({
      include: [
        {
          model: Pokemon,
          attributes: ['name', 'type', 'type2', 'move1', 'move2', 'move3', 'move4', 'ability1', 'ability2', 'ability3']
        }
      ],
      order: [
        ['username', 'DESC'],
      ]
    })
    .then(dbUserData => {
      const users = dbUserData.reverse().map(users => users.get({ plain: true }));
      console.log(users.username);
      res.render('find-users', {
        users,
        loggedIn: req.session.loggedIn,
        user: req.session.user_id,
        currentUser: req.session.username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/find-users/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Pokemon,
          attributes: ['name', 'type', 'type2', 'move1', 'move2', 'move3', 'move4', 'ability1', 'ability2', 'ability3'],
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ]
        }
      ]
    })
    .then(dbUserData => {
      const selectedUser = dbUserData.get({ plain: true });
      console.log(selectedUser);
      res.render('single-user', {
        selectedUser,
        loggedIn: req.session.loggedIn,
        currentUser: req.session.username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;