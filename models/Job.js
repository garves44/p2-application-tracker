const { Model, DataTypes } = require('sequelize');

class Job extends Model {};

const sequelize = require("../config/connection");

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        job_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "job"
    }
);

module.exports = Job