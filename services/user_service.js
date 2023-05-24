const User = require("../models/user_model");

const getAllUserService = async () => await User.find();

const createNewUserService = async (user) => await User.create(user);

const getOneUserService = async (id) => await User.findById(id);

const updateUserService = async (id) => await User.findByIdAndUpdate(id, { new: true });

const deleteUserService = async (id) => await User.findByIdAndDelete(id);

const findUserByEmailService = async (email) => await User.findOne({ email });

const getUserWithTicketService = async (id) => await User.findById(id).populate("ticket");

module.exports = {
    getAllUserService,
    createNewUserService,
    getOneUserService,
    updateUserService,
    deleteUserService,
    findUserByEmailService,
    getUserWithTicketService,
}