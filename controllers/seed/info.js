const { Seed, Farm, User, Crop, Kind } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = async (req, res) => {
  if (!isAuthorized(req)) {
    res.status(403).json({ message: "Invalid access Token" });
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

    //data를 api에 맞게 수정하는 부분
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

    res.status(200).json({ data: revised });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
    return;
  }
};
