const { User } = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  isAuthorized,
  checkRefreshToken,
} = require("./token");

module.exports = {
  info: (req, res) => {
    res.send("test");
  },
  farminfo: (req, res) => {},
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      let userData = await User.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      if (!userData) {
        res.status(403).json({ message: "Invalid user email or password" });
      } else {
        const accessToken = generateAccessToken(userData.dataValues);
        const refreshToken = generateRefreshToken(userData.dataValues);
        sendRefreshToken(res, refreshToken);
        sendAccessToken(res, 200, accessToken);
      }
    } catch (e) {
      console.log(e);
    }
  },
  signup: (req, res) => {},
  signout: (req, res) => {},
};
