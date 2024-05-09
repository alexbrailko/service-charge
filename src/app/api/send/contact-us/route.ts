import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: Request) {
  const { email } = await req.json();

  const transport = nodemailer.createTransport({
    host: 'mail.service-charge.co.uk',
    port: 587,
    auth: {
      user: process.env.INFO_EMAIL,
      pass: process.env.INFO_EMAIL_PASSWORD
    }
  });

  const mailOptions: Mail.Options = {
    from: process.env.INFO_EMAIL,
    to: process.env.INFO_EMAIL,
    subject: `Message from contact form`,
    html: `<body>
            <p>Name: ${email.name}</p>
            <p>Email: ${email.email}</p>
            <p>Message: <br> ${email.message}</p>
          </body>`
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();

    return NextResponse.json(
      {
        message: `Email sent successfully!`
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error.message : error;
    console.error('Error sending email:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
