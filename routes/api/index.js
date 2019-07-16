const router = require("express").Router();
const movieRoutes = require("./movie");

router.use("/movies", movieRoutes);

router.get("/", function(req, res){
    res.json("Express API is connected on port 3001");
})

module.exports = router;