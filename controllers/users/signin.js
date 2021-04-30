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
    // ! DB에서 email로 user 조회 후, 그 user의 salt와 req.body의 password를 통해 hashedPassword 조회
    // ! 그 hashedPassword가 DB의 Password와 같다면 로그인 성공 그렇지 않으면 잘못되었다고 전송
    const hashedPassword = crypto
      .pbkdf2Sync(password, userData.salt, 103523, 64, "sha512")
      .toString("base64");

    if (hashedPassword !== userData.password) {
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
};
