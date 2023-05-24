const express = require("express");
const { getAllEventController, createNewEventController,
    getOneEventController, updateEventController,
    deleteEventController} = require("../controllers/events_controller");

const isAuthenticated = require("../middlewares/isAuthenticated");

const router = express.Router();


router.
    route("/home")
    .get((req, res) => {
        res.status(200).json({
            success: true,
            message: "This is the home page"
        });
    });

router
    .route('/')
    .get(getAllEventController)
    .post(isAuthenticated, createNewEventController)

router
    .route('/:id')
    .get(getOneEventController)
    .patch(isAuthenticated, updateEventController)
    .delete(isAuthenticated, deleteEventController)

module.exports = router;