"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUberUnsOpen, setIsUberUnsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  // Define icons for each section
  const sectionIcons = {
    default: "/images/logo1.png",
    photovoltaik: "/icons/IconPhotovoltaik.png",
    energiespeicher: "/icons/IconStromspeicher.png",
    emobility: "/icons/Iconmobility.png",
    warmepumpe: "/icons/Iconheatpump.png",
    blockheizkraftwerk: "/icons/IconHeizkessel.png",
    energiemanagement: "/icons/Iconcontrol.png",
  };

  return (
    <header className="w-full bg-white border-gray-100">
      <div className="max-w-[1200px] mx-auto relative px-4">
        <div className="flex justify-between items-start">
          {/* Logo and tagline section */}
          <div className="flex items-end gap-6 pt-6 flex-wrap">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Logoautarxia.png"
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

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 mb-5 pt-2">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsUberUnsOpen(false);
                }}
                className="text-[16px] font-roboto font-light flex items-center gap-1 hover:text-[#00c3f3] transition-colors"
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
                              href="/produkte/photovoltaik/sun-home"
                              className="block text-sm hover:font-bold hover:text-orange-400"
                              onClick={() => setIsOpen(false)}
                            >
                              autarxia sun home
                            </Link>
                            <Link
                              href="/produkte/photovoltaik/sun-industry"
                              className="block text-sm hover:font-bold hover:text-orange-400"
                              onClick={() => setIsOpen(false)}
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
                              href="/produkte/emobility/mobility"
                              className="block text-sm hover:font-bold hover:text-red"
                              onClick={() => setIsOpen(false)}
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
                              onClick={() => setIsOpen(false)}
                            >
                              autarxia storage home
                            </Link>
                            <Link
                              href="/produkte/energiespeicher/storage-industry"
                              className="block text-sm hover:font-bold hover:text-blue-400"
                              onClick={() => setIsOpen(false)}
                            >
                              autarxia storage industry
                            </Link>
                            <Link
                              href="/produkte/energiespeicher/storage-heat"
                              className="block text-sm hover:font-bold hover:text-blue-400"
                              onClick={() => setIsOpen(false)}
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
                              onClick={() => setIsOpen(false)}
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
                              onClick={() => setIsOpen(false)}
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
                              href="/produkte/energiemanagement/control"
                              className="block text-sm hover:font-bold hover:text-blue-500"
                              onClick={() => setIsOpen(false)}
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
              href="/eobilitat"
              className="text-[16px] font-roboto font-light flex items-center gap-1 hover:text-[#00c3f3] transition-colors"
              onClick={() => {
                setIsOpen(false);
                setIsUberUnsOpen(false);
              }}
            >
              Eobilität
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

            {/* Über uns Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsUberUnsOpen(!isUberUnsOpen);
                  setIsOpen(false);
                }}
                className="text-[16px] font-roboto font-light flex items-center gap-1 hover:text-[#00c3f3] transition-colors"
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
                  className={`lucide lucide-chevron-down mt-1 transition-transform ${
                    isUberUnsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Über uns Dropdown Menu */}
              {isUberUnsOpen && (
                <div className="absolute -left-10 top-10 z-50 bg-[#2b2c2c] w-[280px] shadow-lg  ">
                  <div className="py-7 px-7">
                    <div className="space-y-6 text-[#94918c] font-mono">
                      <Link
                        href="/uber-uns"
                        className="block text-[22px] hover:text-[#00c3f3] transition-colors"
                        onClick={() => setIsUberUnsOpen(false)}
                      >
                        <span className="">W</span>er sind wir?
                      </Link>
                      <Link
                        href="/unsere-werte-v1-ordener"
                        className="block text-[22px] hover:text-[#00c3f3] transition-colors"
                        onClick={() => setIsUberUnsOpen(false)}
                      >
                        <span className="">U</span>nsere Werte
                      </Link>
                      <Link
                        href="/unsere-werte-soziale"
                        className="block text-[22px] hover:text-[#00c3f3] transition-colors"
                        onClick={() => setIsUberUnsOpen(false)}
                      >
                        <span className="">S</span>oziale Verantwortung
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/kontakte"
              className="text-[16px] font-roboto font-light flex items-center gap-1 hover:text-[#00c3f3] transition-colors"
              onClick={() => {
                setIsOpen(false);
                setIsUberUnsOpen(false);
              }}
            >
              Kontakte
            </Link>
          </nav>

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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100">
              <div className="p-4 space-y-3 ">
                <div className="space-y-4 ">
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
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              autarxia sun home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-orange-400"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
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
                            <Link
                              href="#"
                              className="block text-sm text-red"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
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
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              autarxia storage home
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-blue-400"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              autarxia storage industry
                            </Link>
                            <Link
                              href="#"
                              className="block text-sm text-blue-400"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
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
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
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
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
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
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              autarxia control
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Mobile Über uns Dropdown */}
                <div className="space-y-4">
                  <button
                    onClick={() => setIsUberUnsOpen(!isUberUnsOpen)}
                    className="w-full text-left text-[14px] font-roboto font-light flex items-center justify-between"
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
                      className={`w-4 h-4 transition-transform ${
                        isUberUnsOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {isUberUnsOpen && (
                    <div className="pl-4 space-y-3">
                      <Link
                        href="/uber-uns"
                        className="block text-[15px]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsUberUnsOpen(false);
                        }}
                      >
                        <span className="">W</span>er sind wir?
                      </Link>
                      <Link
                        href="/unsere-werte-v1-ordener"
                        className="block text-[15px]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsUberUnsOpen(false);
                        }}
                      >
                        <span className="">U</span>nsere Werte
                      </Link>
                      <Link
                        href="/unsere-werte-soziale"
                        className="block text-[15px]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsUberUnsOpen(false);
                        }}
                      >
                        <span className="">S</span>oziale Verantwortung
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/eobilitat"
                  className="block  text-[14px] font-roboto font-light"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Eobilität
                </Link>

                <Link
                  href="/kontakte"
                  className="block  text-[14px] font-roboto font-light"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
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
