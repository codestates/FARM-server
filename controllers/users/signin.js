const { User } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../token");
const crypto = require("crypto");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({
      where: {
        email: email,
      },
    });
    const hashedPassword = crypto
      .pbkdf2Sync(password, userData.salt, 103523, 64, "sha512")
      .toString("base64");

    if (hashedPassword !== userData.password) {
      // 일치하는 비밀번호가 없는 경우
      res.status(403).json({ message: "Invalid user email or password" });
    } else {
      const accessToken = generateAccessToken(userData.dataValues);
      const refreshToken = generateRefreshToken(userData.dataValues);
      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, 200, accessToken);
    }
  } catch (e) {
    // 일치하는 이메일이 없을 경우
    res.status(403).json({ message: "Invalid user email or password" });
  }
};
