const { isAuthorized } = require("../auth");
const { Farm, User } = require("../../models");
const { sendStatAndMsg, sendStatAndData } = require("../actions");
module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }

  try {
    const { farmid } = req.params;
    const data = await User.findAll({
      include: [
        {
          model: Farm,
          attributes: [],
          where: {
            id: farmid,
          },
        },
      ],
      attributes: [["id", "user_id"], "email", "name"],
    });
    sendStatAndData(res, 200, data);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
