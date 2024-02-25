import { FORM_SUBMIT_FAIL, FORM_SUBMIT_SUCCESS } from '@/app/constants';
import { cn } from '@/app/helpers/utils';
import React, { FC } from 'react';

interface FormSendResultProps {
  type: typeof FORM_SUBMIT_SUCCESS | typeof FORM_SUBMIT_FAIL;
}

export const FormSendResult: FC<FormSendResultProps> = ({ type }) => {
  return (
    <div
      className={cn(
        'fadeIn p-4 bg-highlight text-white text-base flex justify-center',
        type === FORM_SUBMIT_FAIL && 'bg-error'
      )}
    >
      {type === FORM_SUBMIT_SUCCESS &&
        'Your message has been sent successfully! We will contact you shortly.'}
      {type === FORM_SUBMIT_FAIL &&
        'Submission failed. Please reload the page and try to submit the form again.'}
    </div>
  );
};
