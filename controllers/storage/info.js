const { Seed, Farm, User, Crop, Kind } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    let data = await Crop.findAll({
      attributes: [],
      where: { farms_id: req.params.farmid },
      include: [
        {
          model: Kind,
          attributes: ["icon"],
        },
        {
          model: Seed,
          attributes: ["id", "name"],
          where: { isHarvested: true },
        },
      ],
    });
    const cropData = data.map((el) => el.get({ plain: true }));

    res.status(200).json(cropData);
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
