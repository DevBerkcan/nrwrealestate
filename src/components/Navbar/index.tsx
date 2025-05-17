"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Ankaufsprofil", href: "/Ankaufsprofil" },
    { title: "Kontakt", href: "/Kontakt" },
    { title: "Impressum", href: "/Impressum" },
  ];

  return (
    <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="z-20">
        <Logo />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-20 text-[#1f4b43]"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation - Centered */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <div className="flex space-x-8 lg:space-x-12">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-gothic font-medium text-[#1F4B43] text-[24px] tracking-wide transition-all duration-200 hover:text-[#1c3f38] hover:scale-105"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Slide-in Menu */}
      {isOpen && (
        <div className="absolute top-10 left-0 w-full h-[40vh] px-7 bg-white flex flex-col items-end justify-center space-y-6 text-xl font-medium text-[#1f4b43] transition-all">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-gothic text-[20px] hover:text-[#1c3f38] hover:scale-105 transition-transform duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
