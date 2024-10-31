"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <a href="/">
              <img
                src="src/assets/ppflogo.png"
                className="w-full h-24 bg-gray-300 rounded-lg shadow-lg"
                aria-label="Placeholder for about image"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 90%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 90%, transparent 100%)",
                }}
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/services"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="md:hidden overflow-hidden transition-all duration-700 ease-in-out"
        style={{ maxHeight: isMenuOpen ? "1000px" : "0" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="/services"
            className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
