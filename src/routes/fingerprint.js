const {
  fingerprint: { createFingerprint, getFingerprint },
} = require("../controllers/index");

const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

router.post(
  "/",
  [check("fingerprint", "fingerprint is required").not().isEmpty()],
  createFingerprint
);
router.get(
  "/:fingerprint",
  [check("fingerprint", "fingerprint is required").not().isEmpty()],
  getFingerprint
);
router.get("/", getFingerprint);

module.exports = router;
