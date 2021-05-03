const { User } = require("../../models");
const { isInsufficient, sendStatAndMsg } = require("../actions");
const { createSalt, createhashedPassword } = require("../auth");

module.exports = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    console.log(email, password, username);
    if (isInsufficient(email, password, username)) {
      throw err;
    }

    const userData = await User.findOne({
      where: { email },
    });

    if (userData) {
      sendStatAndMsg(res, 409, "email exists");
      return;
    }
    // ! hash로 암호화해서 hashedPassword/ Salt 모두 저장
    const salt = createSalt();
    const hashedPassword = createhashedPassword(password, salt);

    await User.create({
      salt,
      email,
      name: username,
      password: hashedPassword,
    });
    sendStatAndMsg(res, 201, "Signed up successfully");
    return;
  } catch (err) {
    sendStatAndMsg(res, 422, "insufficient parameters supplied");
    return;
  }
};
