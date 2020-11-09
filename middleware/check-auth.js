const jwt = require('jsonwebtoken');

//module.exports = (req, res, next) => {
exports.checkAuth = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_KEY);
    req.user = user;
}catch(error) {
        return res.status(401).json({
            message: "Auth required"
        })
    }
    next(); 
}

exports.userMiddleware = (req, res, next) => {
    if(req.userdata.role != 'user'){
        return res.status(400).json({message: 'User Access denied'})
    }
    next();
}

