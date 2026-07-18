import Contact from "../models/contact.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, company, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All required fields are mandatory.",
        });
    }

    const contact = await Contact.create({
        name,
        email,
        company,
        subject,
        message,
    });

    res.status(201).json({
        success: true,
        message: "Contact request submitted successfully.",
        data: contact,
    });
});