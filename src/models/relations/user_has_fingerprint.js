const { db } = require("../../db/connection");
const User_has_fingerprint = db.define("user_has_fingerprint", {});

module.exports = User_has_fingerprint;
