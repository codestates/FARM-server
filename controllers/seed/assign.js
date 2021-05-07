const { Seed } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    const { user_id, seed_id } = req.body;

    // user에게 assign 하는 부분
    await Seed.update(
      { users_id: user_id, isAssigned: true },
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
