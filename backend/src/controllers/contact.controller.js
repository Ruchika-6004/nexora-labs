export const submitContactForm = async (req, res) => {
    try {
        const { name, email, company, subject, message } = req.body;

        res.status(200).json({
            success: true,
            message: "Contact request received successfully.",
            data: {
                name,
                email,
                company,
                subject,
                message,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};