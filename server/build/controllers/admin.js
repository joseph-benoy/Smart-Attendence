import { unAuthorizedRequest } from "../errors/customError";
import { loginAdmin } from "../services/admin";
export const login = (req, res, next) => {
    const { email, password } = req.body;
    const result = loginAdmin(email, password);
    if (result) {
        return res.cookie('access-token', result, {
            maxAge: Number(process.env.COOKIE_MAX_AGE),
            httpOnly: true
        }).json({
            login: "success"
        });
    }
    else {
        next(unAuthorizedRequest("Invalid cridentials"));
    }
};
