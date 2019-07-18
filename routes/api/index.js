const router = require("express").Router();
const movieRoutes = require("./movie");

router.use("/movie", movieRoutes);

module.exports = router;