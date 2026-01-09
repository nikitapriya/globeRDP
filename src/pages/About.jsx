import React from "react";
import feature17 from "../assets/feature-17.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

function About() {
    useEffect(() => {
    document.title = "About - GlobeRDP";
  }, []);

  const teams = [
    {
      avatar: assets.Avatar1,
      name: "Mr. Kaushal",
      role: "Server Operations",
    },
    {
      avatar: assets.Avatar6,
      name: "Mr. Nitish",
      role: "Technical Support Engineer",
    },
    {
      avatar: assets.Avatar2,
      name: "Mr. Chandan",
      role: "Customer Success & Marketing",
    },
  ];
  const faqs = [
    {
      question: "Do you offer full admin access RDP?",
      answer:
        "Yes. All our RDP plans include 100% full administrator access with no shared users.",
    },
    {
      question: "How long does it take to receive RDP details after payment?",
      answer:
        "RDP details are usually delivered within 15–20 minutes after successful payment.",
    },
    {
      question: "What can I use this type of RDP for?",
      answer:
        "Our RDP servers can be used for development work, software usage, remote office tasks, automation, and other legitimate business or technical purposes.",
    },
    {
      question: "What is Remote Desktop Protocol (RDP)?",
      answer:
        "Remote Desktop Protocol (RDP) is a Microsoft technology that allows users to connect to and control a remote computer using a graphical interface..",
    },
    {
      question: "Do you offer demos or trials?",
      answer:
        "Yes, we offer a 30-minute free trial. Our paid plans are affordable and come with instant setup and full admin access.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div>
        {/********************************** Title SECTION *************************************/}
        <section className="text-center md:text-left bgFooter">
          <div className="flex flex-col  items-center text-white md:justify-between m-2 p-15">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4">About us</h1>
            <p className="text-lg">Get to know about GlobeRDP and team.</p>
          </div>
        </section>

        {/********************************** First SECTION *************************************/}
        <section className="mt-10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={feature17}
                  alt="Cheapest web hosting"
                  className="w-full max-w-md lg:max-w-lg object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-center md:text-left">
                  Everything You Need to Know About Us
                </h2>

                <p className="text-md mt-4 text-center md:text-left leading-8">
                  GlobeRDP provides dedicated Windows Admin RDP servers across
                  multiple locations. Our infrastructure is designed for
                  performance, security, and reliability, offering flexible
                  configurations to support different business and technical
                  requirements.
                </p>
                <ul className="marker:text-green-700 mt-3 justify-self-center md:justify-self-start list-disc pl-6 space-y-2">
                  <li >100% Dedicated Windows Admin RDP (No Sharing)</li>
                  <li>Instant Setup within 15–30 Minutes</li>
                  <li>
                    Multiple Windows Server Versions (2025 / 2022 / 2019 / 2016)
                  </li>
                  <li>24/7 Technical Support</li>
                </ul>
                <a href="https://globerdp.com/billing/cart.php">
                  <div className="w-fit mt-5 font-semibold text-lg rounded-2xl justify-self-center bg-green-400 hover:text-white hover:bg-green-800 px-4 py-3 transition">
                    View RDP Plans
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/********************************** Team SECTION *************************************/}
        <section className="py-14 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Meet Our GlobeRDP Team
          </h2>
          <p className="text-gray-500 mb-10">
            Our dedicated team ensures reliable support, fast setup, and smooth
            RDP operations.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {teams.map((item, i) => (
              <div
                key={i}
                className="rounded-xl shadow-lg p-6 pb-15 flex flex-col items-center gap-4"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-40 w-40 rounded-full object-cover"
                />

                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-gray-600 italic hover:text-black">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6">
            <strong>Need help?</strong> Contact our support team anytime
          </p>
        </section>

        {/********************************** Ready SECTION *************************************/}
        <section className="getReadyBg py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Check Out Our Admin RDP Plans
                </h2>
                <p className="mt-3 text-lg text-white/90">
                  Plans start at just $7.49 with instant setup and full
                  admin access.
                </p>
              </div>

              {/* Button */}
              <div>
                <a
                  href="https://globerdp.com/billing/cart.php"
                  className="inline-block bg-blue-500 hover:bg-green-950 text-white font-semibold px-5 py-2 rounded-lg transition duration-300"
                >
                  View Plans
                </a>
              </div>
            </div>
          </div>
        </section>
        {/********************************** FAQ SECTION *************************************/}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-10 pb-5">
            FAQ
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md border ${
                    isOpen ? "border-green-200" : "border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg bg-green-50"
                  >
                    {faq.question}

                    <FontAwesomeIcon
                      icon={
                        isOpen
                          ? "fa-solid fa-circle-minus"
                          : "fa-solid fa-circle-plus"
                      }
                      className="text-2xl text-green-500 transition-transform duration-300 "
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-600 ease-in-out  ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden p-5 bg-green-50 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link to="/FAQs">
              {" "}
              <div className="w-fit mt-5 font-semibold text-lg rounded-2xl justify-self-center bg-green-400 hover:text-white hover:bg-green-800 px-4 py-3 transition">
                View More FAQs
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
