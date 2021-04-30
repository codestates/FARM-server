const { Seed, User_Farms, Farm, User, Crop, Kind } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { user_id, seed_id } = req.body;
    await Seed.update(
      { users_id: user_id, isAssigned: true },
      {
        where: {
          id: seed_id,
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
