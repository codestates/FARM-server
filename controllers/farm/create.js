const { isAuthorized } = require("../token");
const { Farm, User_Farms } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    const { farm_name, user_id, img } = req.body;
    //Farm table에 새로운 farm 생성
    console.log(req.body);
    const createdFarm = await Farm.create({
      name: farm_name,
      url: img,
    });

    await User_Farms.create({
      farms_id: createdFarm.id,
      users_id: user_id,
    });

    res.status(200).json({ id: createdFarm.id, message: "Created" });
    return;
  } catch (err) {
    res.status(404).json({ message: "create failed" });
    return;
  }
};
