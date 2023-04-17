const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "app/db/database.sqlite",
});

async function ConnectionTest() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established sccessfuly.");
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
}

ConnectionTest();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.auction = require("./auction.model")(sequelize, Sequelize);

module.exports = db;
