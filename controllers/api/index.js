//================[Dependencies]====================/
const router = require("express").Router();

const jobRoutes = require('./job-routes');
const resumeRoutes = require('./resume-routes');
const interviewRoutes = require('./interview-routes');
const userRoutes = require('./user-routes');

router.use('/jobs', jobRoutes);
router.use('/resumes', resumeRoutes);
router.use('/interviews', interviewRoutes);
router.use('/users', userRoutes);

module.exports = router;