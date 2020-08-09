//================[Models]====================/
const Job = require("./Job");
const Interview = require("./Interview");
const Resume = require("./Resume");
const Application = require("./Application");

//================[Associations]=================/
// Resume.belongsToMany(Job, {
//   through: Application,
//   foreignKey: 'resume_id',
//   otherKey: 'job_id'
// });

Job.belongsTo(Resume);

Resume.hasMany(Job, {
  foreignKey: 'resume_id'
});

Interview.belongsTo(Job);

Job.hasOne(Interview, {
  foreignKey: 'job_id'
});

module.exports = {
  Job,
  Interview,
  Resume,
  Application
};
