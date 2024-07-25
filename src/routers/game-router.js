const { Router } = require("express");
const router = Router();
const gameController = require("../controllers/game-controller");

router.get("/", gameController.getAll);
router.get("/search/id/:userId", gameController.getById);
// router.get('/search/username/:username', userController.getByUsername)

module.exports = router;
