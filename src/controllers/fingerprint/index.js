const { Fingerprint } = require("../../models/index");

const createFingerprint = async (req, res) => {
  const { body } = req;
  try {
    const resfingerprint = await Fingerprint.findOne({
      where: { fingerprint: body.fingerprint },
    });

    if (resfingerprint) {
      return res.status(500).json({
        status: "bad",
        msg: "the fingerprint you are trying to register is already registered",
      });
    }

    const fingerprint = Fingerprint.build(body);
    await Fingerprint.save();
    return res.status(201).json({
      status: "ok",
      fingerprint,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "opps!!",
    });
  }
};

const getFingerprints = async (req, res) => {
  try {
    const fingerprints = await Fingerprint.findAll();
    return res.status(200).json({
      status: "ok",
      fingerprints,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: `opps!!`,
    });
  }
};

const getFingerprint = async (req, res) => {
  const { fingerprint } = req.params;
  try {
    const resfingerprint = await Fingerprint.findOne({
      where: { fingerprint },
    });
    if (!resfingerprint) {
      return res.status(400).json({
        status: "bad",
        fingerprint: resfingerprint,
      });
    }
    return res.status(200).json({
      status: "ok",
      fingerprint: resfingerprint,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: `opps!!`,
    });
  }
};

module.exports = {
  createFingerprint,
  getFingerprint,
  getFingerprints,
};
