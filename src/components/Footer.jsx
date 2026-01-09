import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { blue, pink, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import paytm from "../assets/paytm.svg";
import upi from "../assets/upi.svg";
import gPay from "../assets/google-pay.svg";
import binance from "../assets/binance-icon.png";
import stripe from "../assets/stripe.svg";
import phonePay from "../assets/phonePay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bgFooter text-white pt-12 pb-6 text-lg">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* SECTION 1 — LOGO (full on small) */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 bg-green-50 rounded-2xl p-3 w-fit mx-auto md:mx-0">
            <img
              src={assets.logoText}
              alt="GlobeRDP"
              className="object-cover w-44"
            />
          </div>

          <p className="mt-3 text-md leading-6 font-semibold">
            GlobeRDP  provides dedicated Windows Admin RDP servers across multiple
            locations. All servers are private, secure, and optimized for
            performance and reliability.
          </p>

          <p className="font-semibold mt-4">
            Call Support:{" "}
            <a href="tel:+918058050041" className="hover:text-green-800">
              +91 805 805 0041
            </a>
          </p>

          <p className="font-semibold mt-2">
            Email:{" "}
            <a
              href="mailto:support@globerdp.com"
              className="hover:text-green-800"
            >
              support@globerdp.com
            </a>
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-blue-800 p-3 h-10 w-10 inline-flex items-center justify-center text-white transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
            </a>

            <a
              href="#"
              aria-label="X"
              className="rounded-full bg-black p-3 h-10 w-10 inline-flex items-center justify-center text-white transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <XIcon className="hover:scale-125 transition" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our WhatsApp channel"
              className="rounded-full bg-green-400 p-1.2 h-10 w-10 inline-flex items-center justify-center text-white transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <img
                src={assets.whatsapp_channel_white}
                alt="WhatsApp channel"
                className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-100"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-3 h-10 w-10 inline-flex items-center justify-center 
              bg-linear-to-tr from-yellow-400 via-red-500 to-purple-800 
              hover:scale-110 transition-transform"
            >
              <InstagramIcon sx={{ color: "white" }} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full bg-red-700 p-3 h-10 w-10 inline-flex items-center justify-center text-white transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <YouTubeIcon className="hover:scale-125 transition" />
            </a>
          </div>
        </div>

        {/* SECTION 2 —  Registered Office */}
        <div className="col-span-1 text-left p-2">
          <h3 className="text-xl font-semibold mb-4">REGISTERED OFFICE</h3>
          <p className="text-xl font-bold">Aazoob Technology</p>
          <p className=" text-xl font-bold mb-3">Private Limited</p>
          <p className="text-lg font-stretch-ultra-expanded md:leading-8">
            Plot No. 442, Khata No 86,
            <br />
            Near 17 No Bypass, Sohsarai,
            <br />
            Bihar Sharif, Nalanda, 803118
          </p>
        </div>

        {/* SECTION 3 — COMPANY */}
        <div className="col-span-1 text-left p-2">
          <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 lg:space-y-6">
            {[
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms & Conditions", "/terms-and-conditions"],
              ["Cancellation / Refund Policy", "/cancellation-Refund-policy"],
              // ["FAQs","/FAQs"]
            ].map(([label, link]) => (
              <li key={label}>
                <NavLink
                  to={link}
                  className="flex items-center  gap-2 hover:text-green-800"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* SECTION 4 — SUPPORT (full on small) */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-3 justify-self-center md:justify-self-start">
            <li className="">
              <a
                href="https://globerdp.com/billing/submitticket.php"
                className="flex items-center gap-2 hover:text-green-800"
              >
                <ArrowForwardIosIcon fontSize="small" />
                HelpDesk
              </a>
            </li>

            <li>
              <a
                href="https://globerdp.com/billing/clientarea.php"
                className="flex items-center gap-2 hover:text-green-800"
              >
                <ArrowForwardIosIcon fontSize="small" />
                Client Login
              </a>
            </li>
            <li>
              <NavLink
                to="/FAQs"
                className="flex items-center gap-2 hover:text-green-800"
              >
                <ArrowForwardIosIcon fontSize="small" />
                FAQs
              </NavLink>
            </li>
          </ul>

          <p className="mt-6 text-2xl font-bold">PAYMENTS WE ACCEPT</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-4">
            <img
              src={upi}
              alt="upi"
              width="45"
              height="45"
              className="object-contain hover:scale-135 transition"
            />
            <img
              src={phonePay}
              alt="PhonePe"
              height="30"
              width="30"
              className="object-contain hover:scale-135 transition"
            />
            <img
              src={gPay}
              alt="G-Pay"
              width="45"
              height="45"
              className="object-contain hover:scale-135 transition"
            />
            <img
              src={paytm}
              alt="paytm"
              width="45"
              height="45"
              className="object-contain hover:scale-135 transition"
            />
            <img
              src={stripe}
              alt="stripe"
              width="45"
              height="45"
              className="object-contain hover:scale-135 transition"
            />
            <img
              src={binance}
              alt="binance"
              width="30"
              height="30"
              className="object-contain hover:scale-135 transition"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 p-1 pt-4 text-center text-sm">
        © 2022 – {new Date().getFullYear()}{" "}
        <a href="https://globerdp.com" className="font-bold hover:text-green-400">
           GlobeRDP.com
        </a>
        . | A brand of Aazoob Technology Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
