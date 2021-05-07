const router = require("express").Router();
const { farm } = require("../controllers");

router.post("/create", farm.create);
router.post("/invite", farm.invite);
router.get("/userinfo/:farmid", farm.userinfo);
module.exports = router;
