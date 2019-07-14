const router = require("express").Router();
const movieController = require("../../controller/moviesController");

router.route("/")
    .get(movieController.findAll)
    .post(movieController.create);