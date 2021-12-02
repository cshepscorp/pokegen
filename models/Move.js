const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Move extends Model {}

Move.init(
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
                len: [1, 25]
            }
        },
        power: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        power_points: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 15
        },
        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "pokemon",
                key: "id"
            }
        }
    },
    { // configure the metadata
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true, // In Sequelize, columns are camelcase by default.
        modelName: 'moves'
    }
);

module.exports = Move;