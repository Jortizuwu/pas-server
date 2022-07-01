const User = require("./user");
const Fingerprint = require("./fingerprint");

User.belongsTo(Fingerprint, {
  foreignKey: "fingerprint_id",
});

module.exports = { User, Fingerprint };
