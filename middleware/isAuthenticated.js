const {
    verifyToken
} = require("../services/auth_service");


const isAuthenticated = async (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        
        if (!req.headers.authorization) {
            throw new Error("You are not logged in");
        }

        if (!req.headers.authorization.startsWith("Bearer")) {
            throw new Error("You are not logged in");
        }


        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            throw new Error("You are not logged in");
        }

        const decoded = await verifyToken(token);
        console.log(decoded);
        
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = isAuthenticated;
