const { login, createUser } = require("../controllers/auth");
const { check } = require("express-validator");
const { Router } = require("express");

const router = Router();

router.post(
  "/login",
  [check("fingerprint", "fingerprint is required").not().isEmpty()],
  login
);
router.post(
  "/register",
  [
    check("fingerprint_id", "Fingerprint id is required").not().isEmpty(),
    check("fristName", "Lrist name is required").not().isEmpty(),
    check("lastName", "Last name is required").not().isEmpty(),
    check("status", "status is required").not().isEmpty(),
  ],
  createUser
);

module.exports = router;
