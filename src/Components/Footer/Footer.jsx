import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AppVibe</h3>
            <p className="text-sm leading-relaxed">
              Discover the best mobile apps for productivity, entertainment, and
              more. AppVibe is your go-to platform for finding apps that spark
              your vibe.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-blue-400 transition duration-200 text-sm"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for app recommendations and updates.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm w-full"
              />
              <button className="btn cursor-pointer px-4 py-2 text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none border-none">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Note: Do no't send your email for demo purposes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@appvibe.com"
                className="hover:text-blue-400 transition duration-200"
              >
                support@appvibe.com
              </a>
            </p>
            <p className="text-sm mt-2">
              Address: 123 Tech Lane, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="https://x.com/rashedulraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/rashedulraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/rashedulraha/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Instagram />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} AppVibe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
