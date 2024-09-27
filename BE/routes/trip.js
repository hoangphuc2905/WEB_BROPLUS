const middlewareControllers = require("../controllers/middlewareControllers");
const tripController = require("../controllers/tripController");

const router = require("express").Router();

//GET ALL TRIPS
router.get('/', tripController.getAllTrips);

//CREATE TRIP
router.post("/create",  tripController.createTrip);

//DELETE TRIP
router.delete('/:id', tripController.deleteTrip);

//UPDATE TRIP
router.put('/updatetrips/:id', tripController.updateTrip);

module.exports = router;
