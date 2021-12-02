const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Types extends Model {}

Types.init(
    {
    type: {
        type: DataTypes.STRING(8),
        allowNull: false,
        }
    },
    {
    pokemon_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemon',
            key: 'id'
            }
        }
    },
    { // configure the metadata
        sequelize,
        freezeTableName: true,
        underscored: true, // In Sequelize, columns are camelcase by default.
        modelName: 'types'
    }
);