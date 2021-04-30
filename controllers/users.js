const { User } = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  isAuthorized,
  checkRefreshToken,
} = require("./token");
const crypto = require("crypto");

module.exports = {
  info: (req, res) => {
    res.send("test");
  },
  farminfo: (req, res) => {},
  signin: async (req, res) => {
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
  },
  signup: async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const userData = await User.findOne({
        where: { email: email },
      });
      if (!email || !password || !username) {
        throw err;
      }
      if (userData) {
        res.status(409).json({
          message: "email exists",
        });
      } else {
        // ! hash로 암호화해서 hashedPassword/ Salt 모두 저장
        const salt = crypto.randomBytes(64).toString("base64");
        const hashedPassword = crypto
          .pbkdf2Sync(password, salt, 103523, 64, "sha512")
          .toString("base64");
        await User.create({
          name: username,
          email: email,
          password: hashedPassword,
          salt: salt,
        });
        res.status(201).json({
          message: "Signed up successfully",
        });
      }
    } catch (e) {
      res.status(422).json({
        message: "insufficient parameters supplied",
      });
    }
  },
  signout: (req, res) => {
    if (!isAuthorized(req)) {
      res.status(403).json({ message: "Invalid access Token" });
      return;
    } else {
      res.status(200).json({ message: "You're logged out." });
    }
  },
};
