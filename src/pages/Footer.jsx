import React from "react";
import { SiTelegraph, SiLinkedin } from "react-icons/si";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaApple,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-bg-white  pt-8 ">
      <div className="flex items-center justify-between border-b-4 border-bg-black">
        <div className="pl-4">
          <p className="font-semibold">
            Stay updated with Bitscard by signing up for our newsletter
          </p>
          <div className="bg-bg-white py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-bg-white border border-bg-black p-2 w-80"
            />
            <button className="bg-[#F7931A] border border-bg-black p-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="pr-4">
          <div className="flex justify-between text-2xl">
            <SiTelegraph />
            <SiLinkedin />
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
          <div className="text-bg-white flex gap-4 mt-2 ">
            <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
              <IoLogoGooglePlaystore />
              Google play
            </Link>
            <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
              <FaApple />
              App store
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer p-10 border border-bg-black text-bg-black px-4">
        <Link to="/" className="flex">
          <img alt="logo" />
          <p className="pl-2 text-bg-black font-bold">
            bitcard.<span className="text-[blue]">co</span>
          </p>
        </Link>
        <div>
          <span className="footer-title">Product</span>
          <Link to="/product/global-account" className="link link-hover">
            Global account
          </Link>
          <Link to="/product/gift-card" className="link link-hover">
            Gift Card
          </Link>
          <Link to="/product/virtual-account" className="link link-hover">
            Virtual master card
          </Link>
          <Link to="/product/cryptocurrency" className="link link-hover">
            Cryptocurrency
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/ambassador" className="link link-hover">
            Ambassador
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/faq" className="link link-hover">
            FAQ
          </Link>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p className="font-semibold">email: hello@bitscard.com</p>
          <p className="font-semibold">TEL: 01 229 3581</p>
          <p>18 Admiralty way lekki, Lagos</p>
        </div>
      </footer>
      <div className="p-4 pb-8 text-left leading-relaxed">
        <p>
          * Bitscard offers its products and services in partnership with
          licensed transmitters in their respective jurisdictions.
        </p>
        <p>
          * All trademarks and brand names belong to their respective owners.
          Use of these trademarks and brand names do not represent endorsement
          by or association with Bitscard
        </p>
        <p>
          * IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT: To
          help the government fight the funding of terrorism and money
          laundering activities, federal law requires all financial institutions
          to obtain, verify, and record information that identifies each person
          who opens an Account. What this means for you: When you open an
          Account, we will ask for your name, address, date of birth, and other
          information that will allow us to identify you. We may also ask to see
          a copy of your driver's license.
        </p>
      </div>
    </div>
  );
};

export default Footer;
