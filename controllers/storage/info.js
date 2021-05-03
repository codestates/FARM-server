const { Seed, Farm, User, Crop, Kind } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
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

    sendStatAndData(res, 200, cropData);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
