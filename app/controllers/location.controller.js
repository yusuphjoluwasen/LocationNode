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
        stepCount: req.body.stepCount,
        user: req.body.user,
        timeRemaining: req.body.timeRemaining,
        verifindId:req.body.verifindId,
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

exports.deleteAll = (req, res) => {
    Location.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};
