import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - GlobeRDP";
  }, []);
  const faqs = [
    {
      section: "General",
      items: [
        {
          q: "What is Remote Desktop Protocol (RDP)?",
          a: "Remote Desktop Protocol (RDP) is a Microsoft technology that allows users to remotely access and control a Windows computer or server using a secure graphical interface over the internet.",
        },
        {
          q: "What type of RDP does GlobeRDP provide?",
          a: [
            "GlobeRDP provides ",
            <strong key="bold">
              100% dedicated Windows Admin RDP servers
            </strong>,
            ". All servers are private and not shared with other users.",
          ],
        },
      ],
    },
    {
      section: "Plans & Access",
      items: [
        {
          q: "Do you offer full admin access RDP?",
          a: [
            "Yes. All our RDP plans include ",
            <strong key="bold">full administrator access</strong>,
            ", giving you complete control over the server.",
          ],
        },
        {
          q: "Is the RDP shared with other users?",
          a: [
            "No. Every RDP server is ",
            <strong key="bold">fully dedicated and private</strong>,
            ". We do not offer shared RDP services.",
          ],
        },
        {
          q: "Which Windows Server versions are available?",
          a: [
            "We offer ",
            <strong key="bold">
              Windows Server 2025, 2022, 2019, and 2016
            </strong>,
            ", depending on the selected plan and availability.",
          ],
        },
      ],
    },
    {
      section: "Setup & Delivery",
      items: [
        {
          q: "How long does it take to receive RDP details after payment?",
          a: [
            "RDP login details are usually delivered within ",
            <strong key="bold">15–30 minutes</strong>,
            " after successful payment.",
          ],
        },
        {
          q: "How will I receive my RDP login credentials?",
          a: [
            "Your RDP IP, username, and password are shared via ",
            <strong key="bold">email</strong>,
            " and/or through your ",
            <strong key="bold">client dashboard</strong>,
            " after setup.",
          ],
        },
        {
          q: "Is the setup instant or manual?",
          a: [
            "Most orders are provisioned ",
            <strong key="bold">instantly</strong>,
            ". In some cases, manual verification may be required for security reasons.",
          ],
        },
      ],
    },
    {
      section: "Trial & Pricing",
      items: [
        {
          q: "Do you offer demos or trials?",
          a: [
            "Yes, we offer a ",
            <strong key="bold">30-minute free trial</strong>,
            ". Our paid plans are affordable and come with ",
            <strong key="bold">instant setup and full admin access</strong>,
            ".",
          ],
        },
        {
          q: "What is included in the free trial?",
          a: [
            "The trial provides temporary access to a Windows Admin RDP so you can evaluate performance and usability before purchasing.",
          ],
        },
        {
          q: "Can I upgrade my plan later?",
          a: [
            "Yes. You can ",
            <strong key="bold">upgrade or change your plan</strong>,
            " at any time by contacting our support team.",
          ],
        },
      ],
    },
    {
      section: "Payments & Billing",
      items: [
        {
          q: "What payment methods do you accept?",
          a: [
            "We accept payments via ",
            <strong key="bold">
              {" "}
              UPI, PhonePe, Google Pay, Paytm, Stripe, and Binance
            </strong>,
            ".",
          ],
        },
        {
          q: "Is a GST invoice provided?",
          a: [
            "Yes, a GST invoice can be provided on request. Please contact support after completing your payment.",
          ],
        },
        {
          q: "Are refunds available?",
          a: [
            "Refunds are processed according to our ",
            <NavLink to="/cancellation-Refund-policy">
              <strong key="bold">Cancellation & Refund Policy</strong>
            </NavLink>,
            ". Please review the policy or contact support for assistance.",
          ],
        },
      ],
    },
    {
      section: "Support & Usage",
      items: [
        {
          q: "What can I use this RDP for?",
          a: [
            "Our RDP servers can be used for ",
            <strong key="bold">
              remote work, software usage, development, automation, testing, and
              other legitimate business or technical purposes
            </strong>,
            ".",
          ],
        },
        {
          q: "Is technical support available 24/7?",
          a: [
            "Yes. We provide ",
            <NavLink to="/contact">
              <strong key="bold">24/7 technical support</strong>
            </NavLink>,
            " via email and online chat.",
          ],
        },
        {
          q: "Where can I check server status?",
          a: [
            "You can check the real-time status on your ",
            <strong key="bold">client Dashboard</strong>,
            " Area.",
          ],
        },
      ],
    },
  ];
  const [open, setOpen] = useState(null);
  return (
    <div>
      {/* Title Section */}
      <section className="text-center md:text-left bgFooter">
        <div className="flex flex-col items-center text-white md:justify-between m-2 p-15">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="mt-2 text-lg font-semibold">
            Have questions about our Admin RDP services?
          </p>
          <p className="text-lg">
            Find clear answers about plans, setup, trials, payments, and support
            below.
          </p>
          <NavLink to="/contact">
            <button
              className=" mt-6 rounded-xl px-8 py-4 bg-white text-green-700 font-semibold hover:bg-green-800 hover:text-white hover:shadow-lg hover:shadow-green-800/50 transition"
              type="button"
            >
              Contact Support
            </button>
          </NavLink>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-20">
        {faqs.map((group, i) => (
          <div key={i} className="mb-16">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {group.section}
              </h1>
              <div className="mt-3 h-1 w-20 bg-green-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              {group.items.map((faq, j) => {
                const index = `${i}-${j}`;
                const isOpen = open === index;

                return (
                  <div
                    key={index}
                    className={`rounded-xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-green-300 shadow-md"
                        : "border-gray-200 hover:border-green-200 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left"
                    >
                      <span className="font-semibold text-lg text-gray-800">
                        {faq.q}
                      </span>

                      <FontAwesomeIcon
                        icon={
                          isOpen
                            ? "fa-solid fa-circle-minus"
                            : "fa-solid fa-circle-plus"
                        }
                        className={`text-xl text-green-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
              {group.section === "Trial & Pricing" && (
                <div className="mt-5 flex flex-col sm:flex-row justify-self-center justify-center gap-4">
                  <a href="https://globerdp.com/billing/cart.php">
                    <button className="px-8 py-4 rounded-2xl bg-green-700 text-white font-semibold shadow-md hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/50 transition">
                      View RDP Plans
                    </button>
                  </a>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/918058050040", "_blank")
                    }
                    className="px-8 py-4  rounded-2xl border border-green-700 bg-white text-green-700 font-semibold hover:bg-green-400 hover:border-green-400 hover:text-white hover:shadow-lg hover:shadow-green-400/50 transition"
                  >
                    Start Free Trial
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* CTA Buttons */}
        <div className="mt-20 flex flex-col sm:flex-row justify-self-center justify-center gap-4">
          <NavLink to="/contact">
            <button className="px-8 py-4 rounded-2xl bg-green-700 text-white font-semibold shadow-md hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/50 transition">
              Contact Support
            </button>
          </NavLink>
          <a href="https://globerdp.com/billing/cart.php">
            <button className="px-8 py-4  rounded-2xl border border-green-700 bg-white text-green-700 font-semibold hover:bg-green-400 hover:border-green-400 hover:text-white hover:shadow-lg hover:shadow-green-400/50 transition">
              View RDP Plans
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
