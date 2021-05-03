const { User } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");
module.exports = async (req, res) => {
  try {
    const tokenData = isAuthorized(req);
    if (!tokenData) {
      throw err;
    }
    const { email } = tokenData;
    const userData = await User.findOne({ where: { email } });

    if (!userData) {
      sendStatAndMsg(res, 404, "Not Found");
      return;
    } else {
      const { email, id, name } = userData;
      const data = {
        userinfo: {
          id,
          username: name,
          email,
        },
      };
      sendStatAndData(res, 200, data);
      return;
    }
  } catch (err) {
    sendStatAndMsg(res, 403, "Invalid access token");
    return;
  }
};
