'use client';

import LoadingIcon from '@/app/images/svg/LoadingIcon';
import SearchIcon from '@/app/images/svg/SearcIcon';
// import Image from 'next/image';
import React, { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {}

const SubmitButton: FC<SubmitButtonProps> = ({}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      // value="submit"
      className="absolute inset-y-0 end-0 flex items-center pr-3"
    >
      {pending ? (
        // <Image src={'/loading'} alt="loading" width="30" height="30" />
        <LoadingIcon size="28px" color="#000" />
      ) : (
        <SearchIcon className="text-dark w-7 h-7" />
      )}
    </button>
  );
};

export default SubmitButton;
