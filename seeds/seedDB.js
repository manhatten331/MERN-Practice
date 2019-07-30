const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/MERN-Practice");

const movieSeed = [
    {
        title: "The Matrix",
        genre: "Action Adventure",
        description:
            "A hacker seeks more out of his life when he finds the chance to be freed from it he goes down a big rabbit hole",
        date: new Date(Date.now())
    },
    {
        title: "Superbad",
        genre: "Comedy",
        description:
            "Three teens about to gradute highschool try to wrap up there year by trying to impress their crushes",
        date: new Date(Date.now())
    },
    {
        title: "The Book of Eli",
        genre: "Thriller Action Adventure",
        description:
            "In a post-apocolyptic world one man has task from God to fulfill he will do it by any means necessary.",
        date: new Date(Date.now())
    }
];

db.Movie
    .remove({})
    .then(() => db.Movie.collection.insertMany(movieSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })