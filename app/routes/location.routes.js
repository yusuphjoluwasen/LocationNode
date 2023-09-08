const locations = require("../controllers/location.controller");
module.exports = app => {
    const locations = require("../controllers/location.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/add", locations.create);

    // Retrieve all Tutorials
    router.get("/get", locations.findAll);

    router.delete("/", locations.deleteAll);

    app.use('/api/locations', router);
}
