const { isAuthorized } = require("../token");
const { Crop, Seed, Kind } = require("../../models");
const { sendStatAndData, sendStatAndMsg } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    let data = await Crop.findAll({
      attributes: [["id", "crops_id"], "name"],
      include: [
        {
          model: Kind,
          attributes: ["icon"],
        },
        {
          model: Seed,
          attributes: [["id", "seed_id"], ["name", "seed_name"], "isHarvested"],
        },
      ],
      where: { farms_id: req.params.farmid },
    });
    data = data.map((el) => el.get({ plain: true }));
    const revised = data.map((crop) => {
      let obj = {
        ...crop,
        Kind: crop.Kind.icon,
      };
      return obj;
    });
    sendStatAndData(res, 200, revised);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
