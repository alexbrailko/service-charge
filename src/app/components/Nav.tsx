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
  onLinkClick: () => void;
}

export const Nav: FC<NavProps> = ({ className, onLinkClick }) => {
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
          onClick={onLinkClick}
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
          onClick={onLinkClick}
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
          onClick={onLinkClick}
        >
          Property & Block Management
        </Link>
      </li>
    </ul>
  );
};
