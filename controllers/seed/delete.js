const { Seed } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    const { seed_id } = req.body;
    let data = await Seed.destroy({
      where: { id: seed_id },
    });
    sendStatAndData(res, 200);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
