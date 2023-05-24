const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const User = require("../models/user_model");
const { findUserByEmailService } = require("./user_service");

dotenv.config({ path: "./.env" });

const signature = process.env.SIGNATURE;

const signUpService = async (user) => {
    const newUser = await User.create(user);
    return newUser;
}

const signInService = async (email, password) => {
    const user = await findUserByEmailService(email);

    console.log(user.password);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    

    return user;

}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

const signToken = (id) => {
    return jwt.sign({ id }, signature, {
        algorithm: "HS256",
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

const verifyToken = (token) => {
    return jwt.verify(token, signature);
}




module.exports = {
    signUpService,
    signInService,
    hashPassword,
    comparePassword,
    signToken,
    verifyToken,
}
