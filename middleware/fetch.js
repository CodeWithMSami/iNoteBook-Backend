const jwt = require('jsonwebtoken');
const JWT_SCRET = process.env.JWT_SCRET;

const fetchuser =(req,res,next)=>{
    const tocken = req.header('Auth-token');
    if (!tocken) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(tocken,JWT_SCRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ Error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchuser;