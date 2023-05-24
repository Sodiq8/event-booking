const express = require("express");

const {
    getAllUsersController,
    createNewUserController,
    getOneUserController,
    updateUserController,
    deleteUserController,
    getUserWithPurchasesController
} = require("../controllers/user_controller");


const router = express.Router();

router
    .route("/")
    .get(getAllUsersController)
    .post(createNewUserController)

router
    .route("/:id")
    .get(getOneUserController)
    .patch(updateUserController)
    .delete(deleteUserController)

router
    .route("/:id/purchases")
    .get(getUserWithPurchasesController)

module.exports = router;