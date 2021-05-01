const { isAuthorized } = require("../token");
const { Crop, Seed } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    let data = await Crop.findAll({
      attributes: ["id", "name"],
      where: { farms_id: req.params.farmid },
      include: [{ model: Seed, attributes: ["id", "name", "isHarvested"] }],
    });
    const cropData = data.map((el) => el.get({ plain: true }));
    res.status(200).json({ data: cropData });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
