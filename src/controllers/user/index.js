const { User, Fingerprint } = require("../../models/index");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({
        status: "bad",
        msg: "user not found",
      });
    }

    await User.update({
      status: "inactive",
    });

    return res.json({
      status: "ok",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "bad",
      msg: `opps!!`,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json({
      status: "ok",
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "bad",
      msg: `opps!!`,
    });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { uid: id },
      include: Fingerprint,
    });

    if (!user) {
      return res.status(400).json({
        status: "bad",
        msg: "user not found",
      });
    }

    return res.json({
      status: "ok",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "bad",
      msg: `opps!!`,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { uid, ...newdata } = req.body;
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        status: "bad",
        msg: "user not found",
      });
    }

    await User.update(newdata);
    return res.status(201).json({
      status: "ok",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "bad",
      msg: "opps!!",
    });
  }
};

module.exports = {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
};
