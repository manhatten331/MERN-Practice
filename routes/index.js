const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

console.log("Line 12 from index.js in routes folder: ")
console.log(__dirname);