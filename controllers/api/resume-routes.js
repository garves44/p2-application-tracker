const router = require("express").Router();
const sequelize = require("../config/connection");
const {
    Jobs,
    Resume,
    Interviews
} = require("../../models");

// GET all resumes
router.get('/', (req, res) => {
    Resume.findAll({
        attributes: ['id', 'resume_name'],
        include: {
            model: Jobs,
            attributes: ['jobs_name'],
            // through: 'through table here',
            // as: jobs applied

        }
    })
})

module.exports = router;