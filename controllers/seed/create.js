const { Seed, User_Farms, Farm, User, Crop, Kind } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { seed_name, crop_id } = req.body;
    let data = await Seed.create({
      name: seed_name,
      crops_id: crop_id,
      users_id: null,
      isHarvested: false,
      isAssigned: false,
    });
    res.status(201).json({ data: { seed_id: data.id }, message: "ok" });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
