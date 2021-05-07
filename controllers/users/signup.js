const { User } = require("../../models");

const crypto = require("crypto");

module.exports = async (req, res) => {
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
};
