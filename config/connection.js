//================[Dependencies]====================/
require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
        dialectOptions: {
            decimalNumbers: true,
        },
    });

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection to MySQL has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = sequelize;