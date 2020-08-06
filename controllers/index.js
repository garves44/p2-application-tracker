//================[Dependencies]====================/
const router = require("express").Router();
const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");

//================[Routes]====================/
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.send("<h1> Wrong Route!</h1>");
    res.status(404).end();
});

module.exports = router;