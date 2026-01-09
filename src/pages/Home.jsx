import React from "react";
import Wave from "react-wavify";
import heroHome from "../assets/hero-home.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import TypewriterText from "../components/TypewriterText";
import { useEffect } from "react";

library.add(fas, far, fab);

const Home = () => {
  useEffect(() => {
    document.title = "GlobeRDP >> Buy RDP Server Online";
  }, []);
  const gradientBg = "bg-[linear-gradient(62deg,#28A745_0%,#28A745_100%)]";
  const features = [
    {
      icon: "fa-solid fa-headset",
      title: "Support",
      subTitle: "24/7 Technical Support",
      desc: "Our expert support team is available around the clock to assist you with any RDP-related issues or queries.",
    },
    {
      icon: "fa-solid fa-hard-drive",
      title: "Admin RDP",
      subTitle: "100% Dedicated Admin RDP",
      desc: "Get full administrator access with a private, dedicated Windows RDP server starting at just ₹599/month. No shared access. No limitations.",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Uptime Guarantee",
      subTitle: "99.9% Uptime Guarantee",
      desc: "All GlobeRDP plans are backed by a reliable infrastructure ensuring 99.9% uptime for uninterrupted performance.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Instant Setup",
      subTitle: "Fast Deployment",
      desc: " Receive your RDP credentials within 15–30 minutes after successful payment.",
    },
    {
      icon: "fa-solid fa-shield",
      title: "Secure Environment",
      subTitle: "Private & Secure RDP",
      desc: "Dedicated resources with firewall protection to keep your data safe and isolated.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "High-Speed Performance",
      desc: " SSD/NVMe-powered servers with optimized network speed for smooth remote access.",
    },
  ];
  const plans = [
    {
      name: "RDP R-4",
      price: 7.49,
      pid: 1,
      specs: [
        "4 GB DDR4 RAM",
        "80 GB SSD Storage",
        "2 Core vCPU",
        "Unlimited Bandwidth",
        "Windows Server 2025 / 2022 / 2019 / 2016",
        "1 Dedicated/Private IP",
        "Full Admin Access",
        "Network Speed up to 1 GBPS",
        "Control Panel",
        "24×7 Support",
        "Dedicated Resources (1x Allocation)",
        "Instant Setup",
        "Delivery within 20 minutes",
      ],
    },
    {
      name: "RDP R-8",
      price: 12.49,
      pid: 2,
      specs: [
        "8 GB DDR4 RAM",
        "160 GB SSD Storage",
        "2 Core vCPU",
        "Unlimited Bandwidth",
        "Windows Server 2025 / 2022 / 2019 / 2016",
        "1 Dedicated/Private IP",
        "Full Admin Access",
        "Network Speed up to 1 GBPS",
        "Control Panel",
        "24×7 Support",
        "Dedicated Resources (1x Allocation)",
        "Instant Setup",
        "Delivery within 20 minutes",
      ],
    },
    {
      name: "RDP R-16",
      price: 24.99,
      pid: 3,
      specs: [
        "16 GB DDR4 RAM",
        "320 GB SSD Storage",
        "4 Core vCPU",
        "Unlimited Bandwidth",
        "Windows Server 2025 / 2022 / 2019 / 2016",
        "1 Dedicated/Private IP",
        "Full Admin Access",
        "Network Speed up to 2 GBPS",
        "Control Panel",
        "24×7 Support",
        "Dedicated Resources (1x Allocation)",
        "Instant Setup",
        "Delivery within 20 minutes",
      ],
    },
    {
      name: "RDP R-32",
      price: 49.99,
      pid: 4,
      specs: [
        "32 GB DDR4 RAM",
        "640 GB SSD Storage",
        "8 Core vCPU",
        "Unlimited Bandwidth",
        "Windows Server 2025 / 2022 / 2019 / 2016",
        "1 Dedicated/Private IP",
        "Full Admin Access",
        "Network Speed up to 4 GBPS",
        "Control Panel",
        "24×7 Support",
        "Dedicated Resources (1x Allocation)",
        "Instant Setup",
        "Delivery within 20 minutes",
      ],
    },
  ];
  const faqs = [
    {
      question: " Do you offer full admin access RDP?",
      answer:
        "Yes. All GlobeRDP plans include 100% full administrator access. Every RDP server is dedicated, private, and provides complete control with no shared access.",
    },
    {
      question: "How long does it take to receive RDP details after payment?",
      answer:
        "RDP login details are usually delivered within 15–30 minutes after successful payment. In rare cases, setup may take slightly longer, and our support team will assist you promptly.",
    },
    {
      question: "What can I use this type of RDP for?",
      answer:
        "Our Windows Admin RDP servers can be used for digital marketing, software development, application hosting, automation tasks, remote office work, testing tools, and running Windows-based applications.",
    },
    {
      question: "Do you offer demos or trials?",
      answer:
        "We do not offer free trials. However, all plans come with instant setup, transparent pricing, and dedicated resources, so you know exactly what you are purchasing.",
    },
    {
      question: "What is Remote Desktop Protocol (RDP)?",
      answer:
        "Remote Desktop Protocol (RDP) is a Microsoft technology that allows users to remotely access and control a Windows server or computer through a secure graphical interface over the internet.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div>
        {/********************************** HERO SECTION *************************************/}
        <section className="text-center md:text-left bgFooter pt-15">
          <div className="flex flex-col md:flex-row items-center text-white md:justify-between gap-8 m-5 lg:ml-35 lg:mr-30 p-1 pb-15 md:pb-1">
            <div className="md:w-1/2">
              <span className="border p-2 rounded-2xl text-white">
                <b>Starting at Just $7.49/month</b>
              </span>
              <br />
              <br />
              <h1 className="text-4xl md:text-5xl  mb-4">
                No #1 Windows RDP Server Seller.
              </h1>
              <TypewriterText />
              <br />

              <ul className="text-start flex flex-col gap-4 text-lg">
                <li>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-check"
                    style={{ color: "white" }}
                    size="2xl"
                  />{" "}
                  <b>Full Admin Access.</b>{" "}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-check"
                    style={{ color: "white" }}
                    size="2xl"
                  />{" "}
                  <b>Unlimited Bandwidth.</b>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-check"
                    style={{ color: "white" }}
                    size="2xl"
                  />{" "}
                  <b>Dedicated Private RDP</b>
                </li>
              </ul>
              <br />

              <div className="flex flex-wrap flex-col  md:flex-row gap-3">
                <NavLink
                  to="get-involved"
                  className="px-10 py-3 bg-white text-green-800 rounded-md hover:bg-green-800 hover:text-white"
                >
                  <b>Get Started</b>
                </NavLink>
              </div>
            </div>
            <div className="md:w-1/2 md:flex hidden justify-center ">
              <img
                src={assets.Home}
                alt="Hero"
                className="w-full max-w-md  object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <Wave
              fill="#ffffff"
              paused={true}
              style={{ display: "flex", width: "100%" }}
              options={{
                height: 40,
                amplitude: 600,
                speed: 0.15,
                points: 2,
              }}
            />
          </div>
        </section>
        {/********************************** 2nd SECTION *************************************/}
        <div className="text-center py-10 px-4">
          <h2 className="mb-12 text-3xl md:text-4xl font-semibold">
            <mark className="bg-transparent bg-linear-to-t from-green-300/80 to-transparent bg-no-repeat bg-size-[100%_45%] bg-bottom px-1">
              GlobeRDP
            </mark>{" "}
            Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((item, i) => (
              <div
                key={i}
                className="border border-gray-300 hover:border-0  rounded-xl p-6 flex flex-col items-center text-center gap-4
                              transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-green-600">
                  <FontAwesomeIcon icon={item.icon} size="2xl" />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <h3 className="text-md text-gray-700 font-semibold">
                  {item.subTitle}
                </h3>
                <p className="text-black text-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/********************************** 3rd SECTION *************************************/}
        <div className="mt-3">
          <div className="bg p-4 text-center font-semibold text-white text-xl">
            <h1>
              Get 10% OFF on all RDP plans — Use code{" "}
              <span className="slow-cursor font-bold ">NEW10 </span> at
              checkout. !!
            </h1>
          </div>
          {/* PLANS */}
          <section className="py-20 pt-8 px-4">
            {/* <h1 className="font-semibold text-lg text-center mb-5">
              All plans include dedicated Windows Admin RDP with full control
              and private access.
            </h1> */}
            <div className=" lg:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.pid}
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                >
                  <div
                    className={`${gradientBg} text-center ${
                      plan.price === 999 ? "pt-1" : "pt-0"
                    } pb-5 text-white`}
                  >
                    <div
                      className={`w-full text-xs font-semibold px-2 py-3
      ${plan.price === 12.49 ? "bg-red-500 text-white" : "invisible"}`}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-fire" size="lg" /> Most
                      Popular
                    </div>

                    <div
                      className={`${plan.price === 999 ? "p-1" : "p-2 pt-1"}`}
                    >
                      <div className="bg-gray-900 justify-self-center mt-1 text-xl font-semibold px-4 py-1 rounded-full relative">
                        {plan.name}
                      </div>
                      <p className="mt-4 text-black">Start from</p>
                      <div className="mt-6">
                        <div className="relative inline-block">
                          <span className="text-5xl font-semibold">
                            $
                            {plan.price}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">p/m</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm">
                    {plan.specs.map((s, i) => (
                      <li
                        key={i}
                        className="px-6 py-3 odd:bg-white even:bg-gray-100"
                      >
                        <FontAwesomeIcon
                          icon="fa-solid fa-square-check"
                          className="mr-2 text-green-500"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className={`${gradientBg} p-4 text-center`}>
                    <a
                      href={`https://globerdp.com/billing/cart.php?a=confproduct&i=${plan.pid}`}
                      className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold inline-block"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/********************************** 4th SECTION *************************************/}
        <div className="bg-[linear-gradient(62deg,#28A745_0%,#28A745_100%)]">
          <div className="max-w-7xl mx-auto px-3 md:px-6 py-12">
            <div className="flex flex-col md:flex-row items-center gap-10 text-white">
              {/* LEFT */}
              <div className="md:w-1/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Popular Windows Server.
                  <br />
                  <span className="text-blue-800">Choose Your Version.</span>
                </h1>
              </div>

              {/* RIGHT GRID */}
              <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                {[
                  { y: 2025, p: "Latest performance & security" },
                  { y: 2022, p: "Best balance of stability & features" },
                  { y: 2019, p: "Most compatible for apps & tools" },
                  { y: 2016, p: "Legacy software support" },
                ].map((v) => (
                  <div
                    key={v.y}
                    className="flex flex-col items-center justify-between
                                rounded-md bg-green-700 p-4
                                transition hover:scale-105
                                h-full"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={assets.windows}
                        alt={`Windows ${v.y}`}
                        className="w-14 h-14 object-contain"
                      />
                      <h3 className="mt-3 font-semibold text-center">Windows Server</h3>
                      <h3 className="font-semibold">{v.y}</h3>

                      {v.y === 2022 && (
                        <span className="mt-1 text-xs bg-black/30 px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}

                      <p className="mt-2 text-center text-gray-200">{v.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/********************************** 5th SECTION *************************************/}
        <section className="mt-10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={heroHome}
                  alt="Cheapest web hosting"
                  className="w-full max-w-md lg:max-w-lg object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl leading-relaxed font-semibold">
                  <mark className="bg-transparent bg-linear-to-t from-green-300/80 to-transparent bg-no-repeat bg-size-[100%_45%] bg-bottom px-1">
                    GlobeRDP
                  </mark>{" "}
                  With High-Quality Top RDP Server Solutions
                </h2>

                <p className="text-base md:text-lg mt-4 text-gray-700">
                  We provide reliable and secure Windows Admin RDP servers
                  designed for performance, stability, and full control.
                  Thousands of users trust GlobeRDP for fast setup, dedicated
                  resources, and dependable uptime.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/********************************** Get Started SECTION *************************************/}
        <section
          style={{
            backgroundImage: "linear-gradient(62deg, #28A745 0%, #28A745 100%)",
          }}
          className="relative  overflow-hidden h-fit lg:min-h-110"
        >
          <div className="container mx-auto relative p-6 lg:p-20 z-10">
            <div className="text-center w-full lg:w-[50%] justify-self-center font-semibold  text-white">
              <h2 className="text-2xl  lg:text-5xl  lg:leading-15 mb-6">
                Buy a Dedicated Windows Admin RDP with Powerful 24/7 Support
              </h2>
              <h3 className="text-xl">
                Get full control, private resources, and instant setup — no
                shared access.
              </h3>
              <br />
              <div className="flex justify-center gap-2 md:gap-4">
                <a
                  className="inline-block text-lg rounded-3xl bg-red-500 font-semibold text-white p-2 px-4 mb-2"
                  href="https://globerdp.com/billing/cart.php?a=add&pid=1"
                >
                  Get Started
                </a>
                <a
                  className="inline-block text-lg rounded-3xl bg-white font-semibold text-blue-400 p-2 px-4 mb-2"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* First image – bottom */}
          <div className="absolute bottom-0 left-10 hidden lg:block animate-float-slow">
            <img src={assets.hostingSolutionOne} alt="" className="w-95" />
          </div>

          <div className="absolute justify-self-center right-10 -translate-y-10/12 hidden lg:block animate-float">
            <img src={assets.hostingSolutionTwo} alt="" className="w-75" />
          </div>
        </section>

        {/********************************** FAQ SECTION *************************************/}

        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-10 pb-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md border transition-all ease-in duration-600 ${
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
                      className="text-2xl text-green-500 transition-transform duration-300"
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-600 ease-in-out ${
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
              <div className="w-fit mt-5 font-semibold text-lg rounded-2xl justify-self-center bg-green-400 hover:text-white hover:bg-green-800 px-4 py-3 transition">
                View More FAQs
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
