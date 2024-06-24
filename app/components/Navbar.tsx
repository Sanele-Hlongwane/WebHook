"use client"
// src/components/NavBar.tsx
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

interface MenuItem {
  title: string;
  path: string;
}

const NavBar = ({ handleToggleBlur }: { handleToggleBlur: (blur: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleToggleBlur(!isOpen); // Toggle blur effect
  };

  const menuItems: MenuItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">
            <h1 className="text-yellow-500 hover:text-yellow-400 text-2xl font-bold transition-colors duration-300">
              Eagles Ring
            </h1>
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <MdClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-16 left-0 w-full lg:w-auto lg:top-0 lg:flex-row flex-col bg-black bg-opacity-75 lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative p-4 lg:p-0">
              <Link href={item.path}>
                <p className="block lg:inline-block text-lg lg:text-base relative group">
                  {item.title}
                  <span className="absolute left-0 right-0 h-1 bg-white bottom-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </p>
              </Link>
            </li>
          ))}
          <SignedOut>
            <li className="relative p-4 lg:p-0">
              <SignInButton />
            </li>
          </SignedOut>
          <SignedIn>
            <li className="relative p-4 lg:p-0">
              <Link href="/notifications">
                <p className="block lg:inline-block text-lg lg:text-base relative group">
                  Notifications
                  <span className="absolute left-0 right-0 h-1 bg-white bottom-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </p>
              </Link>
            </li>
            <li className="relative p-4 lg:p-0">
              <Link href="/messages">
                <p className="block lg:inline-block text-lg lg:text-base relative group">
                  Messages
                  <span className="absolute left-0 right-0 h-1 bg-white bottom-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </p>
              </Link>
            </li>
            <li className="relative p-4 lg:p-0">
              <UserButton />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
