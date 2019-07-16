const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Movie
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .then(data => { console.log(data.result) + " MovieController line 9"})
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};