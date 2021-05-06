const { Seed, Farm, User, Crop, Kind } = require("../../models");
const { sendStatAndData, sendStatAndMsg } = require("../actions");
const { isAuthorized } = require("../auth");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    sendStatAndMsg(res, 403, "Invalid access Token");
    return;
  }
  //data를 찾는 부분
  try {
    let data = await Farm.findOne({
      where: { id: req.params.farmid },
      attributes: [],
      include: [
        {
          model: User,
          attributes: [["id", "user_id"]],
          include: [
            {
              model: Seed,
              required: false,
              attributes: [
                ["id", "seed_id"],
                ["name", "seedname"],
              ],
              where: { isHarvested: false, isAssigned: true },
              include: [
                {
                  model: Crop,
                  attributes: [["id", "crop_id"]],
                  required: true,
                  include: [
                    {
                      model: Farm,
                      attirbutes: [],
                      where: { id: req.params.farmid },
                    },
                    {
                      model: Kind,
                      attirbutes: [["Kind", "kind"]],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    data = data.get({ plain: true }).Users;
    const revised = data.map((user) => {
      let obj = {
        ...user,
        seeds: user.Seeds.map((seeds) => {
          let obj = {
            ...seeds,
            kind: seeds.Crop.Kind.icon,
          };
          delete obj.Crop;
          return obj;
        }),
      };
      delete obj.Seeds;
      delete obj.User_Farms;
      return obj;
    });
    sendStatAndData(res, 200, revised);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
