const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model { }

Pokemon.init(
    { // defining the schema
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        type2: {
            type: DataTypes.STRING(8),
        },
        move1: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        move2: {
            type: DataTypes.STRING(25),
        },
        move3: {
            type: DataTypes.STRING(25),
        },
        move4: {
            type: DataTypes.STRING(25),
        },
        ability1: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        ability2: {
            type: DataTypes.STRING(25),
        },
        ability3: {
            type: DataTypes.STRING(25),
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        timestamps: false, // doesn't automatically create 'createdAt' & 'updatedAt' properties.
        underscored: true, // In Sequelize, columns are camelcase by default.
        modelName: 'pokemon'
    }
);

module.exports = Pokemon;