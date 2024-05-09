'use client';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { emailContactUs } from '../mail/contact';

const schema = z.object({
  name: z.string().min(3, validationMessages.minMessage(3)),
  email: z.string().email(validationMessages.emailInvalid),
  message: z.string()
});

export type ContactUsFormProps = z.infer<typeof schema>;

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

  const form = useForm<ContactUsFormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  async function onSubmit(values: ContactUsFormProps) {
    try {
      await emailContactUs(values);
      setFormSuccessMessage(FORM_SUBMIT_SUCCESS);
    } catch (e) {
      console.log('Error', e);
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
