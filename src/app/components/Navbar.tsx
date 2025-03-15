"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import User from "../../../public/user.png";
import Menu from "../../../public/menu.png";
import Link from "next/link";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us" , href: "/contactus"},
  { name: "Vendors", href:"/vendors"},
  { name: "Careers", href:"/careers" },
];

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="relative flex w-full items-center justify-between px-[20px] py-[24px] lg:container lg:mx-auto lg:px-10">
      {/* Logo and Desktop Nav */}
      <div className="flex items-center">
        <Link href="/">
        <Image src={Logo} alt="Logo" className="w-[45px]" />
        </Link>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p key={index} className="text-[#36485C] font-medium">
              {item.href ?
                (<Link href={item.href}>{item.name}</Link>) : (item.name)
                }
            </p>
          ))}
        </div>
      </div>

      {/* User Profile and Menu */}
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" className="w-[38px]" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>

        {/* Menu Icon for Mobile */}
        <Image
          src={Menu}
          alt="Menu"
          className="w-[30px] lg:hidden cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
        <div className="flex flex-col items-start p-4">
          {navLinks.map((item, index) => (
            <div key={index} className="text-[#36485C] font-medium py-2">
              {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
            </div>
          ))}
         
          <div className="text-[#36485C] font-medium py-2">Sign in</div>
        </div>
      </div>
      
      )}
    </nav>
  );
}
