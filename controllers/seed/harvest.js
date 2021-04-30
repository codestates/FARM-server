const { Seed } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { seed_id } = req.body;
    await Seed.update(
      { isHarvested: true },
      {
        where: {
          id: seed_id,
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
    return;
  }
};
