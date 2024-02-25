import { cn } from '@/app/helpers/utils';
import { LoadingIcon } from '@/app/images/svg/LoadingIcon';
import React, { FC } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  fullWidth?: boolean;
  className?: string;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  fullWidth,
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-md bg-highlight text-white px-7 py-[13px] text-[15px] font-medium  hover:bg-highlightLighter transition-all duration-300 focus-visible:outline-none min-h-[48px] cursor-pointer',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {!isLoading ? (
        title
      ) : (
        <LoadingIcon
          size="16px"
          color="var(--white)"
          className="inline-block"
        />
      )}
    </button>
  );
};
