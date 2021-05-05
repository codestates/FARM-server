const { isAuthorized } = require("../auth");
const { Crop, Kind } = require("../../models");
const { sendStatAndMsg, sendStatAndData } = require("../actions");
module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    const { crops_id, newName } = req.body;
    let data = await Crop.update(
      { name: newName },
      { where: { id: crops_id } }
    );
    sendStatAndData(res, 201);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
