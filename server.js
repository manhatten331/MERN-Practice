const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect("mongodb://localhost/MERN-Practice", { useNewUrlParser: true })

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/MERN-Practice", { useNewUrlParser: true },
//     function (error) {
//         if (error) {
//             console.log("Error creating connection" + error)
//         }
//     });

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});