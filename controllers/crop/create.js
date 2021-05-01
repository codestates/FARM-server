const { isAuthorized } = require("../token");
const { Crop, Kind, Farm, User_Farms } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { crop_name, kind, farm_id } = req.body;
    const fruitKind = await Kind.findOne({ where: { icon: kind } });

    let data = await Crop.create({
      name: crop_name,
      farms_id: farm_id,
      kinds_id: fruitKind.id,
    });
    res.status(201).json({
      data: { crop_id: data.id, kind: kind },
      message: "ok",
    });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
