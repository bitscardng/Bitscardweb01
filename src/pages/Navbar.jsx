import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-bg-white border-bg-black border-b-4 font-bold p-0">
      <div className="navbar-start ml-2">
        <Link to="/" className="normal-case text-xl">
          bitscard.<span className="bg-[]">co</span>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
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
            <ul className="p-2 px-2 bg-bg-white text-bg-black border border-bg-black font-normal z-10 ">
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
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-2">
        <div className="flex text-end justify-center items-center border-l-2 border-bg-black py-2">
          <Link className="text-center bg-bg-white p-2">Join Our Telegram</Link>
          <Link className="bg-bg-black text-bg-white text-center p-2">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
