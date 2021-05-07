const router = require("express").Router();
const { users } = require("../controllers");

router.get("/info", users.info);
router.get("/farminfo", users.farminfo);
router.post("/signin", users.signin);
router.post("/signup", users.signup);
router.get("/signout", users.signout);

module.exports = router;
