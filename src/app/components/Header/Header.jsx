"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  // Define icons for each section
  const sectionIcons = {
    default: "/images/logo1.png",
    photovoltaik: "/images/sun-icon.png",
    energiespeicher: "/images/battery-icon.png",
    emobility: "/images/car-icon.png",
    warmepumpe: "/images/heatpump-icon.png",
    blockheizkraftwerk: "/images/leaf-icon1.png",
    energiemanagement: "/images/network-icon.png",
  };

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto relative px-4">
        <div className="flex justify-between items-start">
          {/* Logo and tagline section */}
          <div className="flex items-end gap-6 pt-6 flex-wrap">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo autarxia.png"
                alt="Autarxia Logo"
                width={200}
                height={200}
                className="w-auto h-auto max-w-[150px] md:max-w-[200px]"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center mt-1 space-x-2 flex-wrap">
              <span className="text-[#ffbd1c]">◆</span>
              <span className="text-[13px] font-roboto font-light">
                regional
              </span>
              <span className="text-[#aad343]">◆</span>
              <span className="text-[13px] font-roboto font-light">
                umweltfreundlich
              </span>
              <span className="text-[#262963]">◆</span>
              <span className="text-[13px] font-roboto font-light">autark</span>
              <span className="text-[#00c3f3]">◆</span>
              <span className="text-[13px] font-roboto font-light">
                zuverlässig
              </span>
            </div>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="lg:hidden pt-6 pr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 mb-5 pt-2">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[14px] font-roboto font-light flex items-center gap-1 hover:text-[#00c3f3] transition-colors"
              >
                Produkte
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down mt-1 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 top-10 z-50 bg-white shadow-lg w-[700px] -ml-60 border-black border-2">
                  <div className="flex">
                    {/* Icon Section */}
                    <div className="w-[80px] bg-[#e4e5e4] flex justify-center items-center p-1">
                      <Image
                        src={
                          hoveredSection
                            ? sectionIcons[hoveredSection]
                            : sectionIcons.default
                        }
                        alt="Section Icon"
                        width={120}
                        height={100}
                        priority
                      />
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-6">
                          <div
                            className="space-y-2"
                            onMouseEnter={() =>
                              setHoveredSection("photovoltaik")
                            }
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              Photovoltaik
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-orange-400"
                            >
                              autarxia sun home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-orange-400"
                            >
                              autarxia sun industry
                            </Link>
                          </div>

                          <div
                            className="space-y-2"
                            onMouseEnter={() => setHoveredSection("emobility")}
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              E-Mobilität
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-red"
                            >
                              autarxia mobility
                            </Link>
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                          <div
                            className="space-y-2"
                            onMouseEnter={() =>
                              setHoveredSection("energiespeicher")
                            }
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              Energiespeicher
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-blue-400"
                            >
                              autarxia storage home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-blue-400"
                            >
                              autarxia storage industry
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-blue-400"
                            >
                              autarxia storage heat
                            </Link>
                          </div>

                          <div
                            className="space-y-2"
                            onMouseEnter={() => setHoveredSection("warmepumpe")}
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              Wärmepumpe
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-gray-400"
                            >
                              autarxia heat pump
                            </Link>
                          </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                          <div
                            className="space-y-2"
                            onMouseEnter={() =>
                              setHoveredSection("blockheizkraftwerk")
                            }
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              Blockheizkraftwerk
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold"
                            >
                              autarxia BHKW
                            </Link>
                          </div>

                          <div
                            className="space-y-2"
                            onMouseEnter={() =>
                              setHoveredSection("energiemanagement")
                            }
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <h3 className="font-medium text-black">
                              Energiemanagement
                            </h3>
                            <Link
                              href="#"
                              className="block text-sm hover:font-bold hover:text-blue-500"
                            >
                              autarxia control
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/etabliert"
              className="text-[14px] font-roboto font-light flex items-center gap-1"
            >
              Etablität
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down mt-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            <Link
              href="/uber-uns"
              className="text-[14px] font-roboto font-light flex items-center gap-1"
            >
              Über uns
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down mt-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            <Link
              href="/kontakte"
              className="text-[14px] font-roboto font-light flex items-center gap-1"
            >
              Kontakte
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down mt-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100">
              <div className="p-4">
                {/* Mobile Products Dropdown */}
                <div className="space-y-4">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left text-[14px] font-roboto font-light flex items-center justify-between"
                  >
                    Produkte
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="pl-4 space-y-4">
                      {/* Mobile Products Menu */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-black">
                            Photovoltaik
                          </h3>
                          <div className="pl-4 space-y-2 mt-2">
                            <Link
                              href="#"
                              className="block text-sm text-orange-400"
                            >
                              autarxia sun home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-orange-400"
                            >
                              autarxia sun industry
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-black">
                            E-Mobilität
                          </h3>
                          <div className="pl-4 mt-2">
                            <Link href="#" className="block text-sm text-red">
                              autarxia mobility
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-black">
                            Energiespeicher
                          </h3>
                          <div className="pl-4 space-y-2 mt-2">
                            <Link
                              href="#"
                              className="block text-sm text-blue-400"
                            >
                              autarxia storage home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-blue-400"
                            >
                              autarxia storage industry
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-blue-400"
                            >
                              autarxia storage heat
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-black">Wärmepumpe</h3>
                          <div className="pl-4 mt-2">
                            <Link
                              href="#"
                              className="block text-sm text-gray-400"
                            >
                              autarxia heat pump
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-black">
                            Blockheizkraftwerk
                          </h3>
                          <div className="pl-4 mt-2">
                            <Link
                              href="#"
                              className="block text-sm text-green-500"
                            >
                              autarxia BHKW
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-black">
                            Energiemanagement
                          </h3>
                          <div className="pl-4 mt-2">
                            <Link
                              href="#"
                              className="block text-sm text-blue-500"
                            >
                              autarxia control
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/etabliert"
                  className="block py-2 text-[14px] font-roboto font-light"
                >
                  Etablität
                </Link>

                <Link
                  href="/uber-uns"
                  className="block py-2 text-[14px] font-roboto font-light"
                >
                  Über uns
                </Link>

                <Link
                  href="/kontakte"
                  className="block py-2 text-[14px] font-roboto font-light"
                >
                  Kontakte
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
