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
    console.log(`User`, User);
    const { email, password } = req.body;
    let userData = await Users.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(`userData`, userData);
    if (!userData) {
      res.status(403).json({ message: "Invalid user email or password" });
    } else {
      const accessToken = generateAccessToken(userData);
      res.status(200).json({
        data: { accessToken },
        message: "ok",
      });
    }
  },
  signup: (req, res) => {},
  signout: (req, res) => {},
};
