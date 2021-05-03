const { isAuthorized } = require("../token");
const { Kind } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }
  try {
    let data = await Kind.findAll({
      attribute: ["icon"],
    });

    const kindsData = data.map((el) => el.get({ plain: true }));
    const mapKindsData = kindsData.map((el) => el.icon);
    res.status(201).json({ data: mapKindsData, message: "ok" });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
