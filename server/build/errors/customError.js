import { StatusCodes } from "http-status-codes";
export const badRequest = (message) => {
    return {
        statusCode: StatusCodes.BAD_REQUEST,
        message: message
    };
};
export const unAuthorizedRequest = (message) => {
    return {
        statusCode: StatusCodes.UNAUTHORIZED,
        message: message
    };
};
