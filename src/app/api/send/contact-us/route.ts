import { ContactUsFormProps } from '@/app/components/ContactUs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactUsFormProps = await req.json();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    await resend.emails.send({
      from: 'Service Charge Contact Form <info@service-charge.co.uk>',
      to: 'alexbrailko@gmail.com',
      subject: 'Hello World',
      html: `<body>
          <h2>Message from contact form:</h2>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: <br> ${message}</p>
        </body>`
    });

    return NextResponse.json(
      {
        message: `Email sent successfully!`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      'Error sending email:',
      error instanceof Error ? error.message : error
    );
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
