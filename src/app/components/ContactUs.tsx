'use client';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Resend } from 'resend';

import { ContactUsIcon } from '../images/svg/ContactUsIcon';
import { Button } from './ui/Button';
import { Modal } from './Modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form/Form';
import { Input } from './ui/form/Input';
import { z } from 'zod';
import { FORM_SUBMIT_FAIL, FORM_SUBMIT_SUCCESS } from '../constants';
import { FormSendResult } from './ui/form/FormSendResult';
import { useRouter } from 'next/navigation';
import { cn } from '../helpers/utils';
import { useGlobalstore } from '../store/globals';
import { validationMessages } from '../helpers/validation';
import { Textarea } from './ui/form/Textarea';

const schema = z.object({
  name: z.string().min(3, validationMessages.minMessage(3)),
  email: z.string().email(validationMessages.emailInvalid),
  message: z.string()
});

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || '');

interface ContactUsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ContactUs: FC<ContactUsProps> = ({ className, style }) => {
  const router = useRouter();
  const [formSuccessMessage, setFormSuccessMessage] = useState<
    typeof FORM_SUBMIT_SUCCESS | typeof FORM_SUBMIT_FAIL | ''
  >('');
  const contactModalOpen = useGlobalstore((state) => state.contactModalOpen);
  const setContactModalOpen = useGlobalstore(
    (state) => state.setContactModalOpen
  );

  const closeModal = () => {
    setContactModalOpen(false);
    setFormSuccessMessage('');
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      await resend.emails.send({
        from: 'Service Charge Contact Form <info@service-charge.co.uk>',
        to: 'alexbrailko@gmail.com',
        subject: 'Hello World',
        html: `<body>
          <h2>Message from contact form:</h2>
          <p>Name: ${values.name}</p>
          <p>Email: ${values.email}</p>
          <p>Message: <br> ${values.message}</p>
        </body>`
        // headers: {
        //   'Access-Control-Allow-Origin': '*'
        // }
      });
      setFormSuccessMessage(FORM_SUBMIT_SUCCESS);
    } catch (e) {
      setFormSuccessMessage(FORM_SUBMIT_FAIL);
    }

    form.reset();
    router.refresh();
  }

  return (
    <>
      <div className={cn('container ', className)} style={style}>
        <div className="box-shadow bg-white py-[30px] pl-[25px] pr-[45px] flex justify-between items-center rounded-md sm:flex-col">
          <div className="flex items-center w-[70%] sm:flex-col sm:w-[100%]">
            <div>
              <ContactUsIcon color="var(--highlight)" />
            </div>
            <div className="ml-5 sm:ml-0 sm:text-center sm:mt-2 sm:mb-5">
              <h4 className="mb-1 text-[32px]">Contact us</h4>
              <p className="text-[16px] leading-[155%]">
                Whether you`re buying your house, planning to invest in UK
                property market or looking to optimise your service charge
                spending
              </p>
            </div>
          </div>
          <div>
            <Button
              title="Send a message"
              onClick={() => setContactModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={contactModalOpen} closeModal={closeModal}>
        <h3 className="mb-4">Send us a message</h3>
        {formSuccessMessage && <FormSendResult type={formSuccessMessage} />}
        {!formSuccessMessage && (
          <Form {...form}>
            <form className="space-y-5" id="contact-us">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                title="Send"
                type="submit"
                form="contact-us"
                onClick={form.handleSubmit(onSubmit)}
                style={{ marginTop: '1.5rem' }}
              />
            </form>
          </Form>
        )}
      </Modal>
    </>
  );
};
