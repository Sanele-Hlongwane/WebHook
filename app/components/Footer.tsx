// src/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-yellow-500 font-bold text-xl mb-4 lg:mb-0">
          <Link href="/">
            <div className="hover:text-yellow-400 cursor-pointer">
              Eagles Ring
            </div>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <Link href="/">
            <div className="text-lg mb-4 lg:mb-0 hover:text-gray-400 cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-lg mb-4 lg:mb-0 hover:text-gray-400 cursor-pointer">
              About
            </div>
          </Link>
          <Link href="/services">
            <div className="text-lg mb-4 lg:mb-0 hover:text-gray-400 cursor-pointer">
              Services
            </div>
          </Link>
          <Link href="/users">
            <div className="text-lg mb-4 lg:mb-0 hover:text-gray-400 cursor-pointer">
              Users
            </div>
          </Link>
        </div>
        <div className="text-gray-400 text-sm mt-4 lg:mt-0">
          © {new Date().getFullYear()} Eagles Ring. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
