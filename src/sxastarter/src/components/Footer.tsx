import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral6 text-neutral1 relative">
      <div className="max-w-[1280px] mx-auto px-8 py-8 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-monteserrate text-[22px] font-semibold tracking-wide text-neutral1">
            Hackholics 1
          </span>
        </div>

        {/* Social Links - Responsive */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <div className="flex flex-row gap-10">
            <a
              href="#"
              aria-label="Facebook"
              className="text-neutral1 hover:text-gray-300 transition-colors duration-200"
            >
              <FaFacebookF className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-neutral1 hover:text-gray-300 transition-colors duration-200"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-neutral1 hover:text-gray-300 transition-colors duration-200"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-neutral1 hover:text-gray-300 transition-colors duration-200"
            >
              <FaLinkedinIn className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pb-8 text-center text-2xl font-light text-neutral1">
        © {new Date().getFullYear()} Hackholics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

