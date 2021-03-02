import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import iconBD from "../images/icon1.png";

const Tnavbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-400 px-6 lg:py-6 py-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <img src={iconBD} alt="iconBD" />
        <NavLink
          exact
          to="/"
          activeClassName="text-white"
          className="font-semibold logo text-2xl tracking-tight cursive pl-1 transition-all transform hover:scale-110 hover:rotate-12"
        >
          BDrawings
        </NavLink>
      </div>

      <label
        className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        htmlFor="menu-toggle"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto "
        id="menu"
      >
        <div className="text-m font-semibold lg:flex-grow pl-7">
          <NavLink
            to="/posts"
            activeStyle={{
              fontWeight: "bold",
              color: "#f2f7fa",
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-200 mr-7 "
          >
            Posts
          </NavLink>
          <NavLink
            to="/sketches"
            activeStyle={{
              fontWeight: "bold",
              color: "#f2f7fa",
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-200 mr-7 "
          >
            Sketches
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "#f2f7fa",
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-200 mr-7 "
          >
            About
          </NavLink>
        </div>
        <div className="inline-flex  px-3 lg:pt-3 pt-5">
          <SocialIcon
            url="https://ba.linkedin.com/in/mersudin-djulic-166b5111"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UChs1x2KeFoatb1w_fcnhxTw?feature=applinks"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/mersudin.dulic"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Tnavbar;
