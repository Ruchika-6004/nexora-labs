import Contact from "../models/contact.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiHandler.js";

import { sendEmail } from "../services/email.service.js";

import adminEmailTemplate from "../templates/adminEmail.template.js";
import autoReplyTemplate from "../templates/autoReply.template.js";

export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, company, subject, message } = req.body;

    // Save in MongoDB
    const contact = await Contact.create({
        name,
        email,
        company,
        subject,
        message,
    });
    // Email to Admin
    const adminResponse = await sendEmail({
        to: process.env.EMAIL_USER,
        subject: `New Contact Form - ${subject}`,
        html: adminEmailTemplate({
            name,
            email,
            company,
            subject,
            message,
        }),
    });

    console.log("Admin Email Response:", adminResponse);

    // Auto Reply to User
    const userResponse = await sendEmail({
        to: email,
        subject: "We've received your message",
        html: autoReplyTemplate(name),
    });

    console.log("User Email Response:", userResponse);

    return res.status(201).json(
        new ApiResponse(
            201,
            contact,
            "Contact request submitted successfully."
        )
    );
});