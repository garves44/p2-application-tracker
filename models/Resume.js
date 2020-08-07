const { Model, DataTypes } = require('sequelize');

class Resume extends Model {};

const sequelize = require("../config/connection");

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
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "resume"
    }
);

module.exports = Resume