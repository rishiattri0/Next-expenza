"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-xl border-b border-gray-200/40 dark:border-gray-800/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105"
              onClick={closeMobileMenu}
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 
                bg-gradient-to-br from-gray-900 via-gray-700 to-black 
                rounded-lg sm:rounded-xl flex items-center justify-center 
                shadow-md group-hover:shadow-lg group-hover:rotate-3 
                group-hover:brightness-125 transition-all duration-300"
              >
                <Image src="/logo.svg" alt="App Logo" width={24} height={24} />
              </div>
              <span className="text-2xl sm:text-base md:text-xl lg:text-3xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-400">
                <span className="hidden sm:inline">Expenza</span>
                <span className="sm:hidden">Expenza</span>
              </span>
            </Link>
          </div>

          {/* Right Section (Links + Auth) */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className="relative text-gray-800 dark:text-gray-200 px-3 py-2 rounded-xl text-lg font-medium transition-all duration-200 hover:brightness-125 hover:bg-gray-100/70 dark:hover:bg-gray-800/40 "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="relative text-gray-800 dark:text-gray-200 px-3 py-2 rounded-xl text-lg font-medium transition-all duration-200 hover:brightness-125 hover:bg-gray-100/70 dark:hover:bg-gray-800/40"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="relative text-gray-800 dark:text-gray-200 px-3 py-2 rounded-xl text-lg font-medium transition-all duration-200 hover:brightness-125 hover:bg-gray-100/70 dark:hover:bg-gray-800/40"
              >
                Contact
              </Link>
            </div>
            <AnimatedThemeToggler />

            {/* Authentication - Desktop */}
            <div className="hidden sm:block">
              <SignedOut>
                <SignInButton>
                  <button className="relative overflow-hidden bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-125">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:brightness-125 transition">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/40 transition-all duration-200 active:scale-95 hover:brightness-125"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-3 sm:pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 mt-2 shadow-md">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/40 text-sm font-medium transition-all duration-200 active:scale-95 hover:brightness-200"
              onClick={closeMobileMenu}
            >
              🏠 Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/40 text-sm font-medium transition-all duration-200 active:scale-95 hover:brightness-200"
              onClick={closeMobileMenu}
            >
              ℹ️ About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/40 text-sm font-medium transition-all duration-200 active:scale-95 hover:brightness-200"
              onClick={closeMobileMenu}
            >
              📞 Contact
            </Link>

            {/* Mobile Authentication */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <SignedOut>
                <SignInButton>
                  <button
                    className="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:brightness-125"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center justify-center p-3 rounded-xl bg-gray-100 dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:brightness-125 transition">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-8 h-8 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 via-emerald-500 to-cyan-500"></div>
    </nav>
  );
}
