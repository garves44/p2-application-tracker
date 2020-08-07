//================[Dependencies]====================/
const router = require("express").Router();
const sequelize = require("../config/connection");
const Jobs = require("../models/Jobs");
const Resume = require("../models/Resume");
const Interviews = require("../models/Interviews");

//================[GET ROUTES]====================/
router.get('/', (req, res) => {

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
});

module.exports = router;