const { Sequelize, DataTypes } = require("sequelize");

const mySQLcon = {
  config: new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      port: process.env.DB_PORT,
    }
  ),
  dataTypes: DataTypes,
};

module.exports = mySQLcon