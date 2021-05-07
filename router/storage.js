const router = require("express").Router();
const { storage } = require("../controllers");

router.get("/info/:farmid", storage.info);

module.exports = router;
