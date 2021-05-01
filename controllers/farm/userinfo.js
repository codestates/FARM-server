const { isAuthorized } = require("../token");
const { Farm, User } = require("../../models");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
    return;
  }

  try {
    const { farmid } = req.params;
    const data = await User.findAll({
      include: [
        {
          model: Farm,
          attributes: [],
          where: {
            id: farmid,
          },
        },
      ],
      attributes: [["id", "user_id"], "email", "name"],
    });
    res.status(200).json({ data });
    return;
  } catch (err) {
    res.status(404).json({ message: "Not Found" });
    return;
  }
};
