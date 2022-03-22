import pkg from 'jsonwebtoken';
const { sign, verify, decode } = pkg;
import 'dotenv/config';
const secret = process.env.JWT_CODE;
export const createToken = (payload) => {
    return sign(payload, secret);
};
export const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) {
        return res.status(401).json({ error: "user not authenticated" });
    }
    else {
        try {
            const payload = verify(accessToken, secret);
            if (payload) {
                req.authenticated = true;
                req.username = payload.email;
                req.id = payload.id;
                return next();
            }
        }
        catch (err) {
            return res.status(401).json({ error: "access token invalid" });
        }
    }
};
