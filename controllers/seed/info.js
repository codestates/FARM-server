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
    let data = await User.findAll({
      attributes: [["id", "user_id"]],
      include: [
        {
          model: Seed,
          attributes: [
            ["id", "seed_id"],
            ["name", "seedname"],
          ],
          where: {
            isHarvested: false,
          },
          include: [
            {
              model: Crop,
              attributes: ["farms_id"],
              include: [
                {
                  model: Farm,
                  attributes: [],
                  required: true,
                  where: {
                    id: req.params.farmid,
                  },
                },
                {
                  model: Kind,
                  attributes: [["icon", "kind"]],
                  required: true,
                },
              ],
              required: true,
            },
          ],
          required: true,
        },
      ],
    });
    //dataValues만 뽑아내는 부분
    data = data.map((el) => el.get({ plain: true }));

    const revised = data.map((user) => {
      let obj = {
        ...user,
        seeds: user.Seeds.map((seeds) => {
          let obj = {
            ...seeds,
            kind: seeds.Crop.Kind.kind,
          };
          delete obj.Crop;
          return obj;
        }),
      };
      delete obj.Seeds;
      return obj;
    });
    sendStatAndData(res, 200, revised);
    return;
  } catch (err) {
    sendStatAndMsg(res, 404, "Not Found");
    return;
  }
};
