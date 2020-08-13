const { Model, DataTypes } = require('sequelize');
// create job model
class Job extends Model {};

const sequelize = require("../config/connection");

// define job columns
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
        },
        applied: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "job"
    }
);

module.exports = Job