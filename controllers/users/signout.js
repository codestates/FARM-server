const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

module.exports = (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  } else {
    sendStatAndData(res, 200, "You're logged out.");
  }
};
