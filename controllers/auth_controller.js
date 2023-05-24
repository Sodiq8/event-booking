const {
    signUpService,
    signInService,
    hashPassword,
    signToken,
} = require("../services/auth_service");

const {
    sendErrorMessage,
    sendSuccessMessage
} = require("../utils");

const signUpController = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            address,
            phoneNumber,
        } = req.body;

        console.log(password)
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword)
        const user = await signUpService({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address,
            phoneNumber,
        });

        return sendSuccessMessage(res, "User signed up successfully", user)
    }
    catch (err) {
        err.statusCode = 400;
        return sendErrorMessage(res, err);
    }
}

const signInController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(password)

        const user = await signInService(email, password);

        const token = signToken(user._id);

        data = {
          token, user
        }
        return sendSuccessMessage(res, "User signed in successfully", data)
    }
    catch (err) {
        return sendErrorMessage(res, err);
    }
}

module.exports = {
    signUpController,
    signInController,
}