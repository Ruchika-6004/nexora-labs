import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
    try {
        const response = await resend.emails.send({
            from: process.env.ADMIN_EMAIL,
            to,
            subject,
            html,
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export default sendEmail;