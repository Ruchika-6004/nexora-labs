const adminEmailTemplate = ({
    name,
    email,
    company,
    subject,
    message,
}) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2 style="color:#2563eb;">New Contact Request</h2>

      <hr />

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Company:</strong> ${company || "N/A"}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>

      <hr />

      <p>This email was generated from the Nexora Labs contact form.</p>
    </div>
  `;
};

export default adminEmailTemplate;