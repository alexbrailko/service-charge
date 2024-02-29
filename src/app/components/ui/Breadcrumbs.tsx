import { cn } from '@/app/helpers/utils';
import Link from 'next/link';
import React, { FC } from 'react';

interface BreadcrumbsProps {
  title: string;
  className?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, className }) => {
  return (
    <div className={cn('flex text-sm my-5', className)}>
      <Link className="underline" href="/">
        Home
      </Link>
      <div className="mx-1">/</div>
      <div>{title}</div>
    </div>
  );
};
