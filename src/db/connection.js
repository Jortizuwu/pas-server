const { Sequelize } = require("sequelize");

const db = new Sequelize("lookapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnection = async () => {
  try {
    await db.authenticate();
    db.sync();
    console.log("Connection has been established succesfully");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { db, dbConnection };
