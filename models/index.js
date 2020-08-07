//================[Models]====================/
const Job = require("./Job");
const Interview = require("./Interview");
const Resume = require("./Resume");
const JobResume = require("./JobResume");

//================[Associations]=================/
Resume.hasMany(Job, {
  as: 'resume_id'
});

Interview.belongsTo(Job, {
  as: 'interview_id',
  foreignKey: 'job_id'
});

Resume.belongsToMany(Job, {
  through: JobResume,
  as: 'jobs',
  foreignKey: 'resume_id'
});

module.exports = {
  Job,
  Interview,
  Resume,
};
