import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

// Sample structure for Sitecore navigation data
interface NavItem {
  id: string;
  title: string;
  url: string;
}

// Mock Sitecore data (replace with actual API response)
const sitecoreNavData: NavItem[] = [
  { id: '1', title: 'Home', url: '#' },
  { id: '2', title: 'About', url: '#' },
  { id: '3', title: 'Shop', url: '#' },
  { id: '4', title: 'Donate', url: '#' },
  { id: '5', title: 'Contact', url: '#' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary1">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-12 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-neutral1 text-[22px] font-extrabold tracking-wide font-monteserrate">
            Hackholics 1
          </span>
        </div>

        {/* Navigation - Desktop (Mapped from Sitecore) */}
        <nav className="hidden md:flex gap-10">
          {sitecoreNavData.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-neutral1 text-[16px] font-semibold no-underline font-monteserrate"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-neutral1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineSegment className="w-12 h-12" />
        </button>
      </div>

      {/* Mobile Full-Width Menu (Mapped from Sitecore) */}
      {isOpen && (
        <div>
          <div className="fixed inset-0 bg-primary1 flex flex-col items-center justify-center space-y-6 z-50">
            <nav className="flex flex-col space-y-6 text-center">
              {sitecoreNavData.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="text-neutral1 text-2xl font-semibold no-underline font-monteserrate"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <button
              className="text-neutral1 text-lg font-medium mt-6"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

