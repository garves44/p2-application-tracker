const router = require("express").Router();
const sequelize = require("../config/connection");
const {
    Jobs,
    Resume,
    Interviews
} = require("../../models");

router.get('/', (req, res) => {
    Jobs.findAll({
        attributes: ['id', 'jobs_name', 'applied'],
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
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Jobs.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'jobs_name', 'applied'],
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

router.post('/', (req, res) => {
    Jobs.create({
        jobs_name: req.body.jobs_name
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Jobs.update({
        jobs_name: req.body.jobs_name,
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

router.delete('/:id', (req, res) => {
    Jobs.destroy({
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