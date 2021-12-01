const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
    { // defining the schema
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 8]
            }
        },
        type2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 8]
            }
        },
        ability1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 25]
            }
        },
        ability2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 25]
            }
        },
        ability3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 25]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    { // configure the metadata
        sequelize,
        freezeTableName: true,
        underscored: true, // In Sequelize, columns are camelcase by default.
        modelName: 'pokemon'
    }
);

module.exports = Pokemon;