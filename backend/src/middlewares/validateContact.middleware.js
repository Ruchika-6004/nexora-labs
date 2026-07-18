import { ApiError } from "../utils/ApiHandler.js";

const validateContact = (req, res, next) => {
    const { name, email, subject, message } = req.body;

    if (!name?.trim()) {
        throw new ApiError(400, "Name is required.");
    }

    if (!email?.trim()) {
        throw new ApiError(400, "Email is required.");
    }

    if (!subject?.trim()) {
        throw new ApiError(400, "Subject is required.");
    }

    if (!message?.trim()) {
        throw new ApiError(400, "Message is required.");
    }

    next();
};

export default validateContact;