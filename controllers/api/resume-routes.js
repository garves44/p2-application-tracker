const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
    Job,
    Resume,
    Interview,
    User
} = require("../../models");

// GET all resumes
router.get('/', (req, res) => {
    Resume.findAll({
        attributes: ['id', 'resume_name', 'resume_link'],
        include: [{
            model: Job,
            attributes: ['id', 'job_name'],
            as: 'jobs',
            include: [{
                model: Interview,
                attributes: ['id', 'interview_date'],
                as: 'interview'
            }]
        }]
    })
    .then(dbResumeData => res.json(dbResumeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET single resume
router.get('/:id', (req, res) => {
    Resume.findOne({
        attributes: ['id', 'resume_name', 'resume_link'],
        include: [{
            model: Job,
            attributes: ['id', 'job_name'],
            as: 'jobs',
            include: [{
                model: Interview,
                attributes: ['id', 'interview_date'],
                as: 'interview'
            }]
        }],
        where: {
            id: req.params.id
        }
    })
    .then(dbResumeData => res.json(dbResumeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Resume.create({
        resume_name: req.body.resume_name,
        resume_link: req.body.resume_link
    })
    .then(dbResumeData => res.json(dbResumeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Resume.update({
        resume_name: req.body.resume_name,
        resume_link: req.body.resume_link
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbResumeData => {
        if(!dbResumeData) {
            res.status(404).json({
                message: 'No resume found with this id'
            });
            return;
        }
        res.json(dbResumeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE resume
router.delete('/:id', (req, res) => {
    Resume.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbResumeData => {
        if(!dbResumeData) {
            res.status(404).json({
                message: 'No resume found with this id'
            });
            return;
        }
        res.json(dbResumeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;