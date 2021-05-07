const router = require("express").Router();
const { seed } = require("../controllers");

router.get("/info/:farmid", seed.info);
router.post("/create", seed.create);
router.post("/assign", seed.assign);
router.post("/harvest", seed.harvest);
router.delete("/delete", seed.delete);

module.exports = router;
