import Contact from "../models/contact.model.js";

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, company, subject, message } = req.body;

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};