const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.MYSQL_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(session(sess));



let syncOptions = { force: false };
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
};


sequelize.sync(syncOptions).then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`);
    });
});
