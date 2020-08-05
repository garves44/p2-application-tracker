const { Model, DataTypes } = require('sequelize');

class Jobs extends Model {};

const sequelize = require("../config/connection");

Jobs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        jobs_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "jobs"
    }
);

module.exports = Jobs