const {
    getAllUserService,
    createNewUserService,
    getOneUserService,
    updateUserService,
    deleteUserService,
    findUserByEmailService,
    getUserWithPurchasesService,
} = require("../services/user_service");

const { getPurchasesByUserIdService, } = require("../services/purchase_service");

const getAllUsersController = async (req, res) => {
    try {
        const allUsers = await getAllUserService();
        res.status(200).json({
            success: true,
            message: "Data gotten successfully",
            data: allUsers,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const createNewUserController = async (req, res) => {
}

const getOneUserController = async (req, res) => {
    
    try {
        const { id } = req.params;
        const user = await getOneUserService(id);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "User gotten successfully",
            data: user
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }

}

const updateUserController = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await updateUserService(id, req.body);

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        })

    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const deleteUserController = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await deleteUserService(id);

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user
        })

    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const getUserWithPurchasesController = async (req, res) => {
    

    try {
        const { id } = req.params;
        const user = await getUserWithPurchasesService(id);


        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User gotten successfully",
            data: {
                user,
            }
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


module.exports = {
    getAllUsersController,
    createNewUserController,
    getOneUserController,
    updateUserController,
    deleteUserController,
    //getUserWithPurchasesController
}


