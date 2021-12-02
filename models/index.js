const User = require('./User');
const Pokemon = require('./Pokemon');
const Move = require('./Move');

Pokemon.hasMany(Move, {
    foreignKey: 'pokemon_id'
});

User.hasMany(Pokemon, {
    foreignKey: 'user_id'
});

Move.belongsTo(Pokemon, {
    foreignKey: 'pokemon_id'
});

Pokemon.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Pokemon, Move };