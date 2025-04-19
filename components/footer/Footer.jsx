"use client"

import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-white text-sm pt-16 pb-4">
      <div className="container mx-auto px-4">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Company Name */}
          <div>
            <h2 className="text-[#0e8896] text-xl font-semibold">Pellets Data Analysts</h2>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold mb-3">LOCATION</h3>
            <p className="text-gray-400 leading-6">
              Twiga Towers,<br />
              6th Floor,<br />
              Murangá Road,<br />
              Nairobi, Kenya.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-3">EXPLORE</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">CONTACT US TODAY</h3>
            <p className="mb-1"><span className="text-white">+254 </span><span className="text-red-600 font-semibold">724 476914</span></p>
            <p className="mb-1"><span className="text-white">+254 </span><span className="text-red-600 font-semibold">737 357906</span></p>
            <p className="text-gray-400 mt-2">edwin.lumiti@pelletsdata.co.ke</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 mt-12 mb-6" />

        {/* Middle Section: Social + Nav */}
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p className="text-center md:text-left">© 2025 Pellets Data Analysts. All rights reserved.</p>

          <div className="flex space-x-4 text-white">
            <a href="#"><FaTwitter className="hover:text-[#0e8896]" /></a>
            <a href="#"><FaFacebookF className="hover:text-[#0e8896]" /></a>
            <a href="#"><FaGlobe className="hover:text-[#0e8896]" /></a>
            <a href="#"><FaInstagram className="hover:text-[#0e8896]" /></a>
          </div>

          <nav className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:underline underline-offset-4">Terms of Service</a>
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
          </nav>
        </div>

        {/* Powered by */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Powered by <span className="text-[#0e8896] font-semibold">iROb Technologies</span>
        </div>
      </div>
    </footer>
  )
}
