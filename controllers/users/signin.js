const { User } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  createhashedPassword,
} = require("../auth");
const { sendStatAndMsg } = require("../actions");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({
      where: {
        email,
      },
    });
    const hashedPassword = createhashedPassword(password, userData.salt);

    if (hashedPassword !== userData.password) {
      // 일치하는 비밀번호가 없는 경우
      sendStatAndMsg(res, 403, "Invalid access Token");
      return;
    }
    const accessToken = generateAccessToken(userData.dataValues);
    const refreshToken = generateRefreshToken(userData.dataValues);
    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, 200, accessToken);
    return;
  } catch (err) {
    // 일치하는 이메일이 없을 경우
    sendStatAndMsg(res, 403, "Invalid user email or password");
    return;
  }
};
