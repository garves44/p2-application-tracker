const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class JobResume extends Model {}

JobResume.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'jobs',
        key: 'id'
      }
    },
    resume_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'resume',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job_resume',
  }
);

module.exports = JobResume;