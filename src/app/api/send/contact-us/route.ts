import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'alexbrailko@gmail.com',
      subject: 'Message from contact form',
      html: `<body>
          <p>Name: ${email.name}</p>
          <p>Email: ${email.email}</p>
          <p>Message: <br> ${email.message}</p>
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
