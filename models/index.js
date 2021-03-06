//================[Models]====================/
const Job = require("./Job");
const Interview = require("./Interview");
const Resume = require("./Resume");
const User = require("./User");

//================[Associations]=================/


Job.hasOne(Interview, {
  foreignKey: "job_id",
});

Interview.belongsTo(Job, {
  foreignKey: "job_id",
});

User.hasMany(Job, {
  foreignKey: "user_id",
});

Job.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  Job,
  Interview,
  Resume,
  User,
};
