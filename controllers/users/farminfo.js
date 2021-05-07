const { User, Farm } = require("../../models");
const { isAuthorized } = require("../auth");
const { sendStatAndMsg, sendStatAndData } = require("../actions");

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
    sendStatAndData(res, 200, revised);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
