const { Model, DataTypes } = require('sequelize');

class Interview extends Model {};

const sequelize = require("../config/connection");

Interview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        interview_date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "interview"
    }
);

module.exports = Interview