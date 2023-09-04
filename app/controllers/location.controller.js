const db = require("../models");
const Location = db.locations;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.latitude && !req.body.latitude) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const location = new Location({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        published: req.body.published ? req.body.published : false
    });

    // Save Tutorial in the database
    location
        .save(location)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Location.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
