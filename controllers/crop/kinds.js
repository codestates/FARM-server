const { isAuthorized } = require("../auth");
const { Kind } = require("../../models");
const { sendStatAndMsg, sendStatAndData } = require("../actions");
module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    let data = await Kind.findAll({
      attribute: ["icon"],
    });
    const kindsData = data.map((el) => el.get({ plain: true }));
    const mapKindsData = kindsData.map((el) => el.icon);
    sendStatAndData(res, 201, mapKindsData);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
