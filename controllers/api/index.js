const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const pokemonRoutes = require('./pokemon');
const moveRoutes = require('./moves');

router.use('/users', userRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/moves', moveRoutes);

module.exports = router;