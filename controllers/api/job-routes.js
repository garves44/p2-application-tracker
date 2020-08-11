const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
    Job,
    Resume,
    Interview,
    User
} = require("../../models");

// GET all Jobs
router.get('/', (req, res) => {
    Job.findAll({
        attributes: ['id', 'job_name', 'applied'],
        include: [{
                model: Resume,
                attributes: ['id', 'resume_name', 'resume_link'],
                as: 'resume'
            },
            {
                model: Interview,
                attributes: ['id', 'interview_date'],
                as: 'interview'
            }
        ]
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET single job
router.get('/:id', (req, res) => {
    Job.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'job_name', 'applied'],
        include: [{
                model: Resume,
                attributes: ['id', 'resume_name', 'resume_link'],
                as: 'resume'
            },
            {
                model: Interview,
                attributes: ['id', 'interview_date'],
                as: 'interview'
            }
        ]
    })
    .then(dbJobData => {
        if(!dbJobData) {
            res.status(404).json({
                message: 'No job found with this id'
            });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST new job
router.post('/', (req, res) => {
    Job.create({
        job_name: req.body.job_name,
        user_id: req.session.user_id
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT job
router.put('/:id', (req, res) => {
    Job.update({
        job_name: req.body.job_name
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbJobData => {
        if(!dbJobData) {
            res.status(404).json({
                message: 'No job found with this id'
            });
            return;
        }
        res.json(dbJobData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Add resume to job
router.put('/:id/resume', (req, res) => {
    Job.update({
        resume_id: req.body.resume_id
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE job
router.delete('/:id', (req, res) => {
    Job.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbJobData => {
        if(!dbJobData) {
            res.status(404).json({
                message: 'No job found with this id'
            });
            return;
        }
        res.json(dbJobData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;