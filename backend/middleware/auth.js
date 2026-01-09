import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next) => {
    const token = req.cookies?.token||
    (req.header.authorization && req.header.authorization.split(' ')[1])

    if(!token) {
        return res.status(401).json({success: false,message:'Token Missing'})
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {_id:decoded.id,email:decoded.email};
        next();

    }
    catch (err) {
        const message =err.name === 'TokenExpiredError' ? 'Token Expired' : 'Invalid Token';
        res.status(403).json({success:false,message})
    }
}
export default authMiddleware