import React, { FC } from 'react';
import Link from 'next/link';
import { cn } from '../helpers/utils';

interface NavProps {
  className?: string;
}

export const Nav: FC<NavProps> = ({ className }) => {
  return (
    <ul className={cn('', className)}>
      <li className="">
        <Link className="hover:underline" href="#">
          Service Charge Checker
        </Link>
      </li>
      <li>
        <Link className="hover:underline" href="#">
          Valuable Resources and Tools for Real Estate Investors
        </Link>
      </li>
      <li>
        <Link className="hover:underline" href="#">
          Property Management Portals
        </Link>
      </li>
    </ul>
  );
};
