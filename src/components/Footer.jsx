import React from "react";
import assets from "../assets/assets";
// import { FaXTwitter, FaFacebook, FaGithub, FaInstagram, FaHeart } from "react-icons/fa6";
// import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/80 to-[#c9c4f8] text-center px-6 py-6">
      {/* Quick Links */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
        <div className="space-x-4 space-y-2 flex flex-wrap justify-center">
          <a
            href="#home"
            className="hover:text-white hover:drop-shadow-md transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white hover:drop-shadow-md transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-white hover:drop-shadow-md transition"
          >
            Skills
          </a>
          <a
            href="#profile"
            className="hover:text-white hover:drop-shadow-md transition"
          >
            Profile
          </a>
          <a
            href="#projects"
            className="hover:text-white hover:drop-shadow-md transition"
          >
            Projects
          </a>
          
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5 my-6 text-2xl">
        <a
          href="https://www.facebook.com/priyatam.gupta.754"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition"
        >
          <img src={assets.facebook_icon} alt="" />
          {/* <FaFacebook /> */}
        </a>
        <a
          href="https://www.linkedin.com/in/priyatam-shaw-a83457253"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition"
        >
          <img src={assets.linkedin_icon} alt="" />
          
        </a>
        <a
          href="https://www.instagram.com/mr_priyatam_"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition"
        >
          <img src={assets.instagram_icon} alt="" className="w-6 h-6"/>
          {/* <FaXTwitter /> */}
        </a>
        
        <a
          href="https://www.instagram.com/mr_priyatam_/"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition"
        >
          
          {/* <FaInstagram /> */}
        </a>
      </div>

      <hr className="border-gray-800 my-4" />

      {/* Bottom Text */}
      <p className="text-sm">
        Copyright <span className="inline">©</span> 2025 - Priyatam |{" "}
         All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
