const { isAuthorized } = require("../token");
const { Crop, Kind } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  try {
    const { crop_name, kind, farm_id } = req.body;
    const fruitKind = await Kind.findOne({ where: { icon: kind } });

    let data = await Crop.create({
      name: crop_name,
      farms_id: farm_id,
      kinds_id: fruitKind.id,
    });
    res.status(201).json({
      data: { crop_id: data.id, kind: kind },
      message: "ok",
    });
    return;
  } catch (err) {
    sendStatAndData(res, 404, "Not found");
    return;
  }
};
