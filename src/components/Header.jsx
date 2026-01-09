import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X, HandHelping } from "lucide-react";
import { pink, red } from "@mui/material/colors";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  function sendEmail() {
    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      window.location.href = "mailto: support@globerdp.com";
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const openDropdown = () => {
    setIsOpen(true);
  };

  const [visible, setVisible] = useState(false);
  const [serverDropdown, setServerDropdown] = useState(false);
  const [clientDropdown, setClientDropdown] = useState(false);

  return (
    <>
      <div className="items-center justify-around py-2 font-medium  text-white bg  shadow z-50 hidden lg:flex">
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-row items-center border-r-2 pr-3 space-x-3">
            <span className=" flex items-center text-center rounded-full border p-2">
              <CallIcon sx={{ fontSize: 15 }} />
            </span>{" "}
            <b>
              <a href="tel:+918058050041">+91 - 805-805-0041</a>
            </b>
          </div>
          <span className="flex items-center text-center rounded-full border p-2">
            <MailIcon sx={{ fontSize: 15 }} />
          </span>{" "}
          <b>
            <Link onClick={sendEmail}> support@globerdp.com</Link>{" "}
          </b>{" "}
        </div>
        <div className="text-lg">
          {" "}
          <a href="https://globerdp.com/billing/clientarea.phpp">Login </a>{" "}
          <span className="opacity-[.67]">|</span>{" "}
          <a href="https://globerdp.com/billing/register.php">Register</a>
        </div>
      </div>
      {/* ****************************** Main ******************************************* */}
      <div
        onPointerLeave={closeDropdown}
        className="bg-white shadow-xl flex items-center justify-around px-6 font-medium  sticky top-0  z-50"
      >
        <div className="lg:hidden"></div>
        <Link to="/" className="flex items-center gap-3 py-3">
          <img
            src={assets.logoText}
            className="w-60 object-cover"
            alt="Logo"
          />
        </Link>
        <ul className="hidden lg:flex gap-5 text-sm  h-full text-gray-700 nav">
          <NavLink
            to="/"
            className=" py-5 flex flex-col items-center gap-1 hover:text-green-500"
          >
            <p className="flex items-center gap-1">
              <FontAwesomeIcon icon="fa-regular fa-house" size="lg" /> HOME
            </p>
            <hr className="w-2/4 border-none h-[1.5px] bg-green-400 hidden" />
          </NavLink>
          <a
            className=" py-5 flex flex-col items-center gap-1 hover:text-green-500"
            href="https://globerdp.com/billing/cart.php?gid=1"
          >
            <p className="flex items-center gap-1">
              <FontAwesomeIcon icon="fa-solid fa-hard-drive" size="lg" /> 
               DEDICATED SERVER
            </p>
            <hr className="w-2/4 border-none h-[1.5px] bg-green-400 hidden" />
          </a>

          <NavLink
            to="/about"
            className=" py-5 flex flex-col items-center gap-1 hover:text-green-500"
          >
            <p className="flex items-center gap-1"><FontAwesomeIcon icon="fa-solid fa-circle-info" size="lg" /> ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-green-400 hidden" />
          </NavLink>

          <NavLink
            to="/contact"
            className=" py-5 flex flex-col items-center gap-1 hover:text-green-500"
          >
            <p className="flex items-center gap-1"><FontAwesomeIcon icon="fa-solid fa-phone" size="lg" /> CONTACT US</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-green-400 hidden" />
          </NavLink>
        </ul>

        {/******************************* Sidebar menu for small screens *****************************************/}
        <button
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer lg:hidden"
          alt=""
        >
          <Menu />
        </button>
        {visible && (
          <div
            onClick={() => setVisible(false)}
            className="fixed inset-0 z-40 bg-[#00000080]"
          />
        )}

        <div
          className={`fixed top-0 right-0 bottom-0 z-50 w-68 bg-white
  transform transition-transform duration-300 ease-in-out
  shadow-xl
  ${visible ? "translate-x-0" : "translate-x-full"}
`}
        >
          <ul className="text-sm h-screen flex flex-col text-black list-none p-0 m-0">
            {/*********************************** HOME **************************************************/}
            <li className="border-b pl-3 p-1 pr-2 border-[#e6e6e6] bg-[#00000080]/10">
              <NavLink
                to="/"
                onClick={() => setVisible(false)}
                className="flex items-center px-4 py-3 text-[13px] font-[650]"
              >
                <p className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>
                  <FontAwesomeIcon
                    className="mr-2"
                    icon="fa-solid fa-house-chimney"
                  />
                  HOME
                </p>
              </NavLink>
            </li>

            {/************************************* SERVER **********************************/}
            <li className="border-b pl-3 p-1 pr-3 border-[#e6e6e6] bg-[#00000080]/10">
              <a
                onClick={() => setVisible(false)}
                className="flex items-center px-4 py-3 text-[13px] font-[650]"
                href="https://globerdp.com/billing/cart.php?gid=1"
              >
                <p className="flex items-center">
                  <span className="side w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>
                  DEDICATED SERVER
                </p>
              </a>
            </li>

            {/********************************************* ABOUT *****************************************/}
            <li className="border-b pl-3 p-1 border-[#e6e6e6] bg-[#00000080]/10">
              <NavLink
                to="/about"
                onClick={() => setVisible(false)}
                className="flex items-center px-4 py-3 text-[13px] font-[650]"
              >
                <p className="flex items-center">
                  <span className="side w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>
                  ABOUT
                </p>
              </NavLink>
            </li>

            {/************************************ BLOG ************************************/}
            {/* <li className="border-b pl-3 p-1 border-[#e6e6e6] bg-[#00000080]/10">
              <NavLink
                to="/blog"
                onClick={() => setVisible(false)}
                className="flex items-center px-4 py-3 text-[13px] font-[650]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>
                BLOG
              </NavLink>
            </li> */}

            {/* *************************************** CLIENT AREA ********************************
            <li className="border-b pl-3 p-1 pr-3 border-[#e6e6e6] bg-[#00000080]/10">
              <button
                onClick={() => setClientDropdown(!clientDropdown)}
                className="w-full flex items-center px-4 py-3 text-[13px] font-[650]"
              >
                <div className="flex items-center flex-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>

                  <span> CLIENT AREA</span>
                </div>
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-down"
                  className={`transition-transform text-gray-400 duration-300 ${
                    clientDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
            <li
              className={`overflow-hidden transition-all duration-300 ${
                clientDropdown ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="list-none p-0 m-0">
                <li className="border-b pl-4 p-1 pr-3 border-[#e6e6e6]">
                  <a
                    href="https://globerdp.com/billing/clientarea.phpp"
                    onClick={() => setVisible(false)}
                    className="block px-8 py-2 text-[13px] font-bold"
                  >
                    Login
                  </a>
                </li>
                <li className="border-b pl-4 p-1 pr-3 border-[#e6e6e6]">
                  <a
                    href="https://globerdp.com/billing/register.php"
                    onClick={() => setVisible(false)}
                    className="block px-8 py-2 text-[13px] font-bold"
                  >
                    Register
                  </a>
                </li>
                <li className="border-b pl-4 p-1 pr-3 border-[#e6e6e6]">
                  <a
                    href="https://needrdp.com/client/index.php?rp=/password/reset"
                    onClick={() => setVisible(false)}
                    className="block px-8 py-2 text-[13px] font-bold"
                  >
                    Forgot Password
                  </a>
                </li>
              </ul>
            </li> */}

            {/****************************************** CONTACT ********************************/}
            <li className="border-b pl-3 p-1 border-[#e6e6e6] bg-[#00000080]/10">
              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className="flex items-center px-4 py-3 text-[13px] font-bold"
              >
                <p className="flex items-center">
                  <span className="side w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0"></span>
                  CONTACT US
                </p>
              </NavLink>
            </li>
            <div className=" mt-10 flex flex-col gap-4 w-full justify-center items-center">
              <a href="https://globerdp.com/billing/clientarea.phpp">
                <button className="px-10 py-3 w-50 rounded-2xl border border-green-700 bg-white text-green-700 font-semibold hover:bg-green-400 hover:border-green-400 hover:text-white hover:shadow-lg hover:shadow-green-400/50 transition">
                  Login
                </button>
              </a>
              <a href="https://globerdp.com/billing/register.php">
                <button className="px-10 py-3 w-50 rounded-2xl text-white font-semibold  bg-green-400 shadow-lg shadow-green-400/50 transition">
                  SignUp
                </button>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div
        onClick={() => window.open("https://wa.me/918058050041", "_blank")}
        className=" z-50 fixed bottom-5 left-5 text-white flex items-center justify-center rounded-full w-15 h-15 bg-green-500 shadow-lg cursor-pointer"
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </div>
    </>
  );
}
