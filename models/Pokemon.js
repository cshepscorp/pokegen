const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Comment model
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
                // notEmpty: true, // i think this would also have worked
                len: [30]
            }
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
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