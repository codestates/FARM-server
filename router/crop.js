const router = require("express").Router();
const { crop } = require("../controllers");

router.get("/info/:farmid", crop.info);
router.get("/kinds", crop.kinds);
router.post("/create", crop.create);
router.put("/update", crop.update);

module.exports = router;
