const { Model, DataTypes } = require('sequelize');
// create resume model
class Resume extends Model {};

const sequelize = require("../config/connection");

// define resume columns
Resume.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        resume_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resume_link: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'No link'
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "resume"
    }
);

module.exports = Resume