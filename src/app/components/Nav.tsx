'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { cn } from '../helpers/utils';
import { usePathname } from 'next/navigation';
import {
  URL_PROPERTY_MANAGEMENT,
  URL_RESOURCES,
  URL_SERVICE_CHARGE_FINDER
} from '../constants';

interface NavProps {
  className?: string;
}

export const Nav: FC<NavProps> = ({ className }) => {
  const currentPath = usePathname();

  return (
    <ul className={cn(className)}>
      <li className="">
        <Link
          className={cn(
            'hover:underline',
            currentPath === URL_SERVICE_CHARGE_FINDER && 'underline'
          )}
          href={URL_SERVICE_CHARGE_FINDER}
        >
          Service Charge Finder
        </Link>
      </li>
      <li>
        <Link
          className={cn(
            'hover:underline',
            currentPath === URL_RESOURCES && 'underline'
          )}
          href={URL_RESOURCES}
        >
          Valuable Resources and Tools for Real Estate Investors
        </Link>
      </li>
      <li>
        <Link
          className={cn(
            'hover:underline',
            currentPath === URL_PROPERTY_MANAGEMENT && 'underline'
          )}
          href={URL_PROPERTY_MANAGEMENT}
        >
          Property & Block Management
        </Link>
      </li>
    </ul>
  );
};
