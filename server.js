import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER || 'shekharsidhant88@gmail.com';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.SMTP_APP_PASSWORD;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({
        message:
          'Email service is not configured. In .env set SMTP_USER and SMTP_PASS (or GMAIL_APP_PASSWORD). Use a Gmail App Password, not your normal Gmail password.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_RECEIVER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `New portfolio contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111827;">
          <h2 style="margin-bottom:12px;">New Portfolio Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`);
});
