const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user-controller");

router.get("/", userController.getAll);
router.get("/search/id/:userId", userController.getById);
// router.get('/search/username/:username', userController.getByUsername)

module.exports = router;
