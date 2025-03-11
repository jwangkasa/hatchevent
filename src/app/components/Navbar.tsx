import Image from "next/image";
import Logo from "../../../public/logo.png";
import User from "../../../public/user.png";
import Menu from "../../../public/menu.png";
import Link from "next/link";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Vendor" },
  { name: "Affiliates" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[24px] lg:container lg:mx-auto lg:px-10">
      <div className="flex items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[45px]" />
        </Link>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p key={index} className="text-[#36485C] font-medium">
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                item.name
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:flex items-center font-medium text-[#36485C] pr-[38px]">
          Contact Us
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" className="w-[38px]" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu" className="w-[30px] lg:hidden" />
      </div>
    </nav>
  );
}
