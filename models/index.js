const User = require('./User');
const Pokemon = require('./Pokemon');
const Abilities = require("./AbilitiesV2");
const Types = require("./TypesV2");

Pokemon.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Pokemon, {
    foreignKey: 'user_id'
});

Pokemon.hasMany(Abilities, {
    foreignKey: 'user_id'
});

Pokemon.belongsTo(Types, {
    foreignKey: 'user_id'
});

module.exports = { User, Pokemon, Abilities, Types };