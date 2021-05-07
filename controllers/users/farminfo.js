const { User, Farm } = require("../../models");
const { isAuthorized } = require("../token");
const crypto = require("crypto");

module.exports = async (req, res) => {
  try {
    const tokenData = isAuthorized(req);

    const findData = await User.findOne({
      where: { id: tokenData.id },
      include: {
        model: Farm,
        through: { attributes: [] },
      },
    });

    const data = findData.get({ plain: true });
    const revised = data.Farms.map((el) => {
      const obj = { ...el };
      delete obj.createdAt;
      delete obj.updatedAt;
      return obj;
    });

    res.status(200).json({ data: revised });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
