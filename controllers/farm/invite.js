const { isAuthorized } = require("../token");
const { User, User_Farms } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { email, farm_id } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    // users_id: user.id,
    // farms_id: farm_id,
    const [data, created] = await User_Farms.findOrCreate({
      where: {
        users_id: user.id,
        farms_id: farm_id,
      },
    });
    // 만약 초대하려는 유저가 이미 농장에 있다면 이미 있는 유저라는 메시지를 클라이언트에 전달.
    if (!created) {
      res
        .status(409)
        .json({ message: "this user is already a member of this farm" });
      return;
    }
    // 새로운 멤버가 추가 되면 해당 메시지 클라이언트에 전달.
    res
      .status(201)
      .json({ id: user.id, username: user.name, message: "new member added" });
    return;
  } catch (err) {
    res.status(404).json({ message: "create failed" });
    return;
  }
};
