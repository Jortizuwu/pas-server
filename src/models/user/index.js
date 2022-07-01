const { db } = require("../../db/connection");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      default: "active",
      allowNull: false,
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lockedapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);
module.exports = User;
