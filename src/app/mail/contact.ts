import { ContactUsFormProps } from '../components/ContactUs';

export async function emailContactUs(data: ContactUsFormProps) {
  const url = `/api/send/contact-us`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data })
    });

    console.log('response', response);

    if (!response.ok) {
      throw new Error(
        'Failed to call "Contact us" API: ' + response.statusText
      );
    }
  } catch (error) {
    console.log('Error', error);

    console.error(error instanceof Error ? error.message : error);
    return Promise.reject();
  }
}
