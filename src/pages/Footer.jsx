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
import { logo } from "../assests";

const Footer = () => {
  return (
    <div className="pt-8 bg-bg-white ">
      <div className="border-b-4 border-bg-black">
        <div className="flex flex-col items-start justify-between gap-4 px-4 pb-4 lg:flex-row lg:items-center">
          <div>
            <p className="">
              Stay updated with Bitscard by signing up for our newsletter
            </p>
            <div className="flex w-full py-2 bg-bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border bg-bg-white border-bg-black"
              />
              <button className="bg-[#F7931A] border border-bg-black p-2 px-4 font-bold">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <SiTelegraph size={26}/>
              <SiLinkedin size={26}/>
              <FaTwitterSquare size={26}/>
              <FaFacebookSquare size={26}/>
              <FaInstagramSquare size={26}/>
            </div>
            <div className="flex gap-1 text-bg-white">
              <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
                <IoLogoGooglePlaystore />
                Google play
              </Link>
              <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
                <FaApple />
                App store
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-10 px-4 border footer border-bg-black text-bg-black">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10"/>
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
      <div className="p-4 pb-8 leading-relaxed text-left">
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
