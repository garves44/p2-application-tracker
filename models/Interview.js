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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "interview"
    }
);

module.exports = Interview