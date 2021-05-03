const { Seed } = require("../../models");
const { sendStatAndMsg } = require("../actions");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
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
    sendStatAndMsg(res, 200, "ok");
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
