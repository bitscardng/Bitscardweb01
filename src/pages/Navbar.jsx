import React from "react";
import { Link } from "react-router-dom";
import {logo
} from "../assests";

const Navbar = () => {
  return (
    <div className="fixed z-50 p-0 font-bold border-b-4 navbar bg-bg-white border-bg-black ">
      <div className="ml-2 navbar-start">
        <Link to="/" className="text-xl normal-case">
          <img src={logo} alt="" className="h-8" />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li tabIndex={0}>
            <p>
              Product
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="z-10 p-2 px-2 font-normal border bg-bg-white text-bg-black border-bg-black ">
              <li>
                <Link to="/product/virtual-account">
                  <p>Virtual Master Card</p>
                </Link>
              </li>{" "}
              <li>
                <Link to="/product/gift-card">
                  <p>Gift Card</p>
                </Link>
              </li>
              <li>
                <Link to="/product/cryptocurrency">
                  <p>Cryptocurrency</p>
                </Link>
              </li>
              <li>
                <Link to="/product/global-account">
                  <p>Global Account</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className="mr-2 navbar-end">
        <div className="flex items-center justify-center py-2 border-l-4 text-end border-bg-black">
          <Link className="p-2 text-center bg-bg-white">Join Our Telegram</Link>
          <Link className="p-2 text-center bg-bg-black text-bg-white">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
