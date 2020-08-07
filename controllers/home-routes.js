//================[Dependencies]====================/
const router = require("express").Router();
const sequelize = require("../config/connection");

//================[GET ROUTES]====================/
//
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