//================[Dependencies]====================/
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

/* ===============[ Sessions ]================================*/
// We need to use sessions to keep track of our user's login status
let cookieExpirationTime = new Date();
let time = cookieExpirationTime.getTime();
let seconds = process.env.EXPIRATION || 3600;

time += seconds * 1000; // convert seconds to milliseconds
cookieExpirationTime.setTime(time);

const sess = {
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: cookieExpirationTime,
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const API_PORT = process.env.MYSQL_API_PORT || process.env.PORT || 3001;

//================[Middleware]===================/
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "views/build")));
}

// force is set to false/true depending on if your set to development
let syncOptions = { force: false };
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

// app listening
sequelize.sync(syncOptions).then(() => {
  app.listen(API_PORT, () => {
    console.log(`Api is listening on port ${API_PORT}!`);
  });
});
