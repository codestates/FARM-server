const router = require("express").Router();
const { storage } = require("../controllers");

router.get("/info", storage.info);

module.exports = router;
