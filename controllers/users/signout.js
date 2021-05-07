const { isAuthorized } = require("../token");

module.exports = (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  } else {
    res.status(200).json({ message: "You're logged out." });
  }
};
