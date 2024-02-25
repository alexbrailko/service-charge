import React from 'react';
import { ContactUs } from './ContactUs';
import { Nav } from './Nav';

export default function Footer() {
  return (
    <footer className="mt-[130px] md:mt-0 relative">
      <ContactUs className="absolute md:relative top-[-80px] md:top-auto md:bottom-[-50px] mx-auto left-0 right-0" />
      <div className="h-[250px] sm:h-auto bg-dark text-center text-white text-sm pt-[120px] sm:pt-[100px]">
        <div className="container">
          <Nav className="flex text-sm uppercase font-bold justify-center [&>*]:px-6 sm:flex-col sm:space-y-4" />
          <div className="text-sm text-white mt-[50px] pb-[40px]">
            Copyright © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
