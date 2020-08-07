const router = require("express").Router();
const sequelize = require("../config/connection");
const {
    Job,
    Resume,
    Interview
} = require("../../models");
const JobResume = require("../../models/JobResume");

// GET all Jobs
router.get('/', (req, res) => {
    Job.findAll({
        attributes: ['id', 'job_name', 'applied'],
        include: [{
                model: Resume,
                attributes: ['resume_name'],
                through: JobResume,
                as: 'resume'
            },
            {
                model: Interview,
                attributes: ['interview_date']
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
                attributes: ['resume_name']
            },
            {
                model: Interviews,
                attributes: ['interview_date']
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
        job_name: req.body.job_name
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT job (expects job_name and applied, can send original name in body to update applied status)
router.put('/:id', (req, res) => {
    Job.update({
        job_name: req.body.job_name,
        applied: req.body.applied
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbJobData => {
        if(!dbPostData) {
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