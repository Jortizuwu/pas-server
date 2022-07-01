const {
  user: { deleteUser, updateUser, getUser, getUsers },
} = require("../controllers/index");

const { Router } = require("express");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
