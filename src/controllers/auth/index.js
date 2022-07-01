const { User, Fingerprint } = require("../../models/index");

const login = async (req, res) => {
  const { fingerprint } = req.body;
  try {
    const fingerprintRes = await Fingerprint.findOne({
      where: { fingerprint },
    });
    const user = await User.findOne({
      where: { fingerprint_id: fingerprintRes.fingerprint_id },
      include: Fingerprint,
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

const createUser = async (req, res) => {
  const { body } = req;
  try {
    const cadena = [];
    for (let i = 1; i < 5; i++) {
      let number = Math.floor(Math.random() * (0 - 9) + 9);
      cadena.push(number.toString());
    }
    const pin = `${pin[0]}${pin[1]}${pin[2]}${pin[3]}${pin[4]}`;
    const user = User.build({ ...body, status: "active", pin });
    await user.save();
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
  login,
  createUser,
};
