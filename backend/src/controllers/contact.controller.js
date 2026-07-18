import Contact from "../models/contact.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiHandler.js";

export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, company, subject, message } = req.body;

    const contact = await Contact.create({
        name,
        email,
        company,
        subject,
        message,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            contact,
            "Contact request submitted successfully."
        )
    );
});