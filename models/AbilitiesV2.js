const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Abilities extends Model {}

Abilities.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ability1: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
    },
    {
        ability2: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
    },
    // {
    //     ability3: {
    //         type: DataTypes.STRING(20),
    //         allowNull: true
    //     },
    // },
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
        modelName: 'abilities'
    }
);