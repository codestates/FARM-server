const { isAuthorized } = require("../token");
const { Crop, Seed } = require("../../models");
const { sendStatAndData, sendStatAndMsg } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    let data = await Crop.findAll({
      attributes: ["id", "name"],
      where: { farms_id: req.params.farmid },
      include: [{ model: Seed, attributes: ["id", "name", "isHarvested"] }],
    });
    const cropData = data.map((el) => el.get({ plain: true }));
    sendStatAndData(res, 200, cropData);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
