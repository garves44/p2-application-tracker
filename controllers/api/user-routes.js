const router = require("express").Router();
const { Job, Resume, Interview, User } = require("../../models");
// const withAuth = require('../../utils/auth');

// GET all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
    include: [
      {
        model: Job,
        attributes: ["id", "job_name"],
        as: "jobs",
        include: [
          {
            model: Resume,
            attributes: ["id", "resume_name", "resume_link"],
            as: "resume",
          },
          {
            model: Interview,
            attributes: ["id", "interview_date"],
            as: "interview",
          },
        ],
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET single user
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: {
      exclude: ["password"],
    },
    include: [
      {
        model: Job,
        attributes: ["id", "job_name"],
        as: "jobs",
        include: [
          {
            model: Resume,
            attributes: ["id", "resume_name", "resume_link"],
            as: "resume",
          },
          {
            model: Interview,
            attributes: ["id", "interview_date"],
            as: "interview",
          },
        ],
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login user
// /api/users/login
router.post("/login", (req, res) => {
  // expects {email: 'email@place.com', password: 'password1234'}
  res.status(200).json(req.body);

  /* 
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({
        message: "No user with that email address.",
      });
      return;
    }

    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect password!",
      });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({
        user: dbUserData,
        message: "You are now logged in.",
      });
    });
  });
  */
});

/*
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
*/

module.exports = router;
