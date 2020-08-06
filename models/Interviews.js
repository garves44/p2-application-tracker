const { Model, DataTypes } = require('sequelize');

class Interviews extends Model {};

const sequelize = require("../config/connection");

Interviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        interview_date: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        jobs_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Jobs",
                key: "id"
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "interviews"
    }
);

module.exports = Interviews