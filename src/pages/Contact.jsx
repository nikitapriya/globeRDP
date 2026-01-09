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

function Contact() {
  useEffect(() => {
    document.title = "Contact - GlobeRDP";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks for filling this form we will contact to you very soon`);

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };
  return (
    <>
      <div>
        {/********************************** Title SECTION *************************************/}
        <section className="text-center md:text-left bgFooter">
          <div className="flex flex-col  items-center text-white md:justify-between m-2 p-15">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4">Contact us</h1>
            <p className="text-lg">
              Send us an email or fill out the form below and we'll get back to
              you as soon as we can.
            </p>
          </div>
        </section>
        {/********************************** 2nd SECTION *************************************/}
        <div className="text-center py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8 max-w-6xl mx-auto">
            <div
              className=" rounded-xl px-4 py-12 flex flex-col items-center text-center gap-1
                            transition-all duration-300 shadow-xl  shadow-indigo-300 contact_features "
            >
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                className="text-4xl  mb-4"
              />
              <h3 className="text-2xl font-bold">Email</h3>
              <p className="mb-3 font-semibold">
                <a
                  href="mailto:support@globerdp.com"
                  className="text-green-600 feature_link"
                >
                  support@globerdp.com
                </a>
              </p>
              <p className="text-md">Response within 12–24 hours</p>
            </div>

            {/* WhatsApp */}
            <div
              className="rounded-xl px-4 py-12 flex flex-col items-center text-center gap-1
                                      transition-all duration-300 shadow-2xl  shadow-indigo-300 contact_features"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                className="text-4xl  mb-4"
              />
              <h3 className="text-2xl font-bold">WhatsApp & Call</h3>
              <p className="mb-3 font-semibold">
                <a
                  href="tel:+918058050041"
                  className="text-green-600 feature_link"
                >
                  +91 805 805 0041
                </a>
              </p>
              <p className="text-md">Faster response during working hours.</p>
            </div>

            {/* Online Chat */}
            <div
              className="rounded-xl px-4 py-12 flex flex-col items-center text-center gap-1
                                      transition-all duration-300 shadow-2xl  shadow-indigo-300 contact_features"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-comments"
                className="text-4xl mb-4"
              />
              <h3 className="text-2xl font-bold">Online Chat</h3>
              <p className="mb-3 font-semibold">
                <button
                  // onClick={() => window.$crisp?.push(["do", "chat:open"])}
                  className="text-green-600 feature_link"
                >
                  Start Chat Now
                </button>
              </p>
              <p className="text-md">Live chat available 24/7</p>
            </div>
          </div>
        </div>

        {/********************************** Form SECTION *************************************/}
        <section className="py-16 mt-3">
          <div className="container  mx-auto bg-white shadow-xl rounded-xl p-10 py-20 max-w-6xl">
            <div className="mx-auto lg:w-[65%]">
              <h2 className="text-4xl font-semibold text-center mb-6">
                Fill Out the Contact Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-lg border border-gray-400 focus:border-0 p-5 pl-16 rounded-xl
               focus:ring-2 focus:ring-green-500 focus:outline-none"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    title="Please enter a valid email address"
                    className="w-full text-lg border border-gray-400 focus:border-0 p-5 pl-16 rounded-xl
               focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />

                  <div className="relative">
                    {/* +91 prefix */}
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                      +91
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[6-9][0-9]{9}"
                      title="Please enter a valid 10-digit Indian mobile number"
                      className="w-full text-lg border border-gray-400 focus:border-0 p-5 pl-16 rounded-xl
               focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                  </div>
                </div>

                <textarea
                  rows="4"
                  name="comment"
                  placeholder="How can we help you?"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full text-lg border border-gray-400 focus:border-0 p-5 pl-16 rounded-xl
               focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <div className="text-center space-y-6 text-gray-700">
                  <p>
                    We usually respond within a few hours during business hours.
                  </p>
                  <button
                    type="submit"
                    className="bg-green-700 text-white text-xl px-10 py-3 rounded-md hover:bg-green-400 hover:text-white hover:shadow-lg hover:shadow-green-400/50 transition"
                  >
                    Send Message
                  </button>
                  <p>
                    Your information is kept private and used only to respond to
                    your inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
