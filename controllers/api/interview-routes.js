const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
    Job,
    Resume,
    Interview,
    User
} = require("../../models");

// GET all interviews
router.get('/', (req, res) => {
    Interview.findAll({
        attributes: ['id', 'interview_date'],
        include: [{
                model: Job,
                attributes: ['id', 'job_name', 'applied'],
                as: 'job',
                include: [{
                    model: Resume,
                    attribtues: ['id', 'resume_name', 'resume_link'],
                    as: 'resume'
                }]
            }
        ]
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET single interview
router.get('/:id', (req, res) => {
    Interview.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'interview_date'],
        include: [{
                model: Job,
                attributes: ['id', 'job_name', 'applied'],
                as: 'job',
                include: [{
                    model: Resume,
                    attribtues: ['id', 'resume_name', 'resume_link'],
                    as: 'resume'
                }]
            }
        ]
    })
    .then(dbInterviewData => {
        if(!dbInterviewData) {
            res.status(404).json({
                message: 'No interview found with this id'
            });
            return;
        }
        res.json(dbInterviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST new interview
router.post('/', (req, res) => {
    Interview.create({
        interview_date: req.body.interview_date,
        job_id: req.body.job_id
    })
    .then(dbInterviewData => res.json(dbInterviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT interview
router.put('/:id', (req, res) => {
    Interview.update({
        interview_date: req.body.interview_date
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbInterviewData => {
        if(!dbInterviewData) {
            res.status(404).json({
                message: 'No interview found with this id'
            });
            return;
        }
        res.json(dbInterviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE interview
router.delete('/:id', (req, res) => {
    Interview.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbInterviewData => {
        if(!dbInterviewData) {
            res.status(404).json({
                message: 'No interview found with this id'
            });
            return;
        }
        res.json(dbInterviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;