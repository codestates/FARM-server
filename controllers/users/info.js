const { User } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  try {
    const tokenData = isAuthorized(req);
    if (!tokenData) {
      throw err;
    } else {
      const { email } = tokenData;
      const userData = await User.findOne({ where: { email } });
      console.log(userData);
      if (!userData) {
        res.status(404).json({ message: "Not Found" });
      } else {
        const { email, id, name } = userData;
        const data = {
          data: {
            userinfo: {
              id,
              username: name,
              email,
            },
          },
          message: "ok",
        };
        res.status(200).json(data);
      }
    }
  } catch (e) {
    res.status(403).json({ message: "Invalid access token" });
  }
};
