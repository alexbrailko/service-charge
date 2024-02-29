'use client';

import React, { useState } from 'react';

import LogoIcon from '@/app/images/svg/LogoIcon';
import SearchIcon from '@/app/images/svg/SearchIcon';
import Sidebar from './Sidebar';
import { BurgerIcon } from '../images/svg/BurgerIcon';
import { Nav } from './Nav';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const path = usePathname();

  const withBoxShadow = path !== '/' && !path.includes('search-results');

  return (
    <header>
      <Sidebar isOpen={navbarOpen} toggle={() => setNavbarOpen(false)} />
      <div className="top bg-light">
        <Nav
          className="
        container flex  pt-3 pb-3 text-sm uppercase font-bold justify-center [&>*]:px-6 
        tb:text-center 
        sm:hidden
        "
        />
      </div>
      <div className={`${withBoxShadow && 'box-shadow'}`}>
        <div className="bottom container py-5 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <LogoIcon />
            </a>
            <hr className="w-[2px] h-[30px] bg-highlight mx-5 sm:hidden" />
            <div className="text-sm/[15px] sm:hidden">
              Service Charge checker & Database
            </div>
          </div>

          <div className="flex">
            <div className="bg-highlight rounded-[10px] w-[43px] h-[43px] flex items-center justify-center">
              <SearchIcon color="#FFF" size="12" />
            </div>
            <BurgerIcon
              className="ml-[12px] tb:hidden lg:hidden"
              onClick={() => setNavbarOpen(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
