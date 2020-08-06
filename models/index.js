//================[Models]====================/
const Jobs = require('./Jobs');
const Interviews = require('./Interviews');
const Resume = require('./Resume');


//================[Associations]=================/
Interviews.belongsTo(Jobs, {
    foreignKey: {
        key: ""
    }
})




module.exports = {
    Jobs,
    Interviews,
    Resume
};