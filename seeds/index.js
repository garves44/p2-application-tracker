const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- Database Synced ----\n')

    process.exit(0);
};

seedAll();