const { db } = require("../../db/connection");
const { DataTypes } = require("sequelize");

const Fingerprint = db.define(
  "Fingerprint",
  {
    fingerprint_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fingerprint: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "fingerprint",
  }
);
module.exports = Fingerprint;
