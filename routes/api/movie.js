const router = require("express").Router();
const movieController = require("../../controller/moviesController");

router.route("/")
    .get(movieController.findAll)
    .post(movieController.create);

router.route("/:id")
    .get(movieController.findById)
    .put(movieController.update)
    .delete(movieController.remove);

module.exports = router;