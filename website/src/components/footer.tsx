"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Precision Pros Flooring
            </a>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-primary text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-primary text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-primary text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-primary text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a> */}
            <a href="#" className="text-gray-600 hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Precision Pros Flooring LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
