const { isAuthorized } = require("../token");
const { Farm, User_Farms } = require("../../models");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    const { farm_name, user_id, img } = req.body;
    //Farm table에 새로운 farm 생성
    const createdFarm = await Farm.create({
      name: farm_name,
      url: img,
    });
    //User_Farms table에 새로운 관계 생성
    await User_Farms.create({
      farms_id: createdFarm.id,
      users_id: user_id,
    });

    res.status(200).json({ id: createdFarm.id, message: "Created" });
    return;
  } catch (err) {
    sendStatAndData(res, 404, "create failed");
    return;
  }
};
