const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// All defined routes will be given the prefix "/api"
router.use("/api", apiRoutes);

// If no routes are hit, run the react app
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;
// console.log("Line 12 from index.js in routes folder: ")
// console.log(__dirname);