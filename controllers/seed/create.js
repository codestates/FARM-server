const { Seed } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
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
    sendStatAndData(res, 201, { seed_id: data.id });
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
