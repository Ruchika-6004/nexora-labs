const autoReplyTemplate = (name) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">

      <h2>Hello ${name}, 👋</h2>

      <p>
        Thank you for contacting <strong>Nexora Labs</strong>.
      </p>

      <p>
        We have successfully received your message.
        Our team will review your request and get back to you as soon as possible.
      </p>

      <br/>

      <p>Regards,</p>

      <h3>Nexora Labs Team</h3>

    </div>
  `;
};

export default autoReplyTemplate;