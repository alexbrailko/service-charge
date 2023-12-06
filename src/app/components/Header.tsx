import React from 'react';
import LogoIcon from '@/app/images/logo.jpg';
import SearchIcon from '@/app/images/svg/SearcIcon';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-dark">
      <div className="container pt-2 pb-2 flex items-center justify-between">
        <div>
          <a href="/">
            <Image src={LogoIcon} width={150} alt="logo" />
          </a>
        </div>

        <ul className="flex [&>*]:text-white font-medium [&>*]:max-w-[140px] [&>*]:mx-2">
          <li>
            <a href="#">Service Charge - free checker</a>
          </li>
          <li>
            <a href="#">Surface water & Flooding Checker</a>
          </li>
          <li>
            <a href="#">Investment tools</a>
          </li>
          <li>
            <a href="#">Property management</a>
          </li>
          <li>
            <a href="#">Full Property checker</a>
          </li>
        </ul>

        <div className="bg-white rounded-full p-4">
          <SearchIcon color="#000" />
        </div>
      </div>
    </div>
  );
}
