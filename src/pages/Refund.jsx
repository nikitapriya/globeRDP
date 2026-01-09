import React from "react";
import { useEffect } from "react";

const Refund = () => {
  useEffect(() => {
    document.title = "Refund Policy - GlobeRDP";
  }, []);
  return (
    <div>
      {/* Title Section */}
      <section className="text-center md:text-left bgFooter">
        <div className="flex flex-col items-center text-white md:justify-between m-2 p-15">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cancellation/Refund Policy.
          </h1>
          <p className="text-lg">
            Get to know about GlobeRDP Cancellation/Refund Policy.
          </p>
        </div>
      </section>

      <section className="terms-conditions pt-24 pb-24 max-w-6xl justify-self-center bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="single-privacy bg-white shadow-lg rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
              Welcome To GlobeRDP Cancellation/Refund Policy.
            </h3>
            <div className="text-center space-y-4">
              <p>
                We offer a money-back guarantee to those clients who placed an
                order first time or using our service first time and are unhappy
                with our service. To get the refund, you have to give a valid
                reason as to why you are unhappy with our service, after that,
                you have to provide us with some time so that we can solve your
                problem if we fail then only money will be refunded. The refund
                request will be considered valid for 7 days after plan
                activation;
              </p>

              <b>
                1-day full refund policy and seven days partial refund policy
                after that, the refund requested will be deemed invalid.
              </b>
            </div>

            <h4 className="section-title mt-10">1-day Full Refund Policy:</h4>
            <p>
              This policy allows customers to receive a full refund for their
              purchase within one day of the original transaction. If a customer
              decides they no longer want the product or service they purchased,
              they can cancel it within 24 hours and receive a complete /full
              refund. This policy aims to give customers a quick and hassle-free
              way to cancel their purchase and receive a full refund.
            </p>

            <h4 className="section-title">
              Seven-day(s) Partial Refund Policy:
            </h4>
            <p>
              This policy allows customers to receive a partial refund for their
              purchase within seven days of the original transaction. If a
              customer decides to cancel the service within the specified time
              frame (seven days), they will receive a refund. However, the
              refund may be for less than the total purchase amount. Instead, it
              will be a percentage of the original price after deducting any
              applicable fees or charges. This policy allows customers to cancel
              their purchase within a slightly extended timeframe..
            </p>

            <p>
              Please note that refund policies may vary depending on the
              business or organization. It's always important to review the
              specific refund policy of the company you are dealing with to
              understand any conditions, exceptions, or limitations that may
              apply.
            </p>

            <p>
              <strong>
                Refunds will be issued using the original payment method used
                for the purchase.
              </strong>
            </p>

            <p>
              <strong>
                Refunds will be processed within <em>5-7 business days</em> from
                the date of approval.
              </strong>
            </p>

            <div className="text-center mt-10 mb-4">
              <b className="text-sm">
                The following points will NOT be accepted for asking refunds:
              </b>
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>I am not getting download/upload speed.</strong> (The
                download/upload speeds depend on many factors which are not in
                our hands).
              </li>
              <li>
                <strong>I ordered by mistake.</strong>
              </li>
              <li>
                <strong>I changed my mood, I don't want RDP Server.</strong>
              </li>
              <li>
                <strong>I don't know how to use the VPS/RDP Serve.</strong> (We
                will help, just contact us).
              </li>
              <li>
                <strong>I ordered the wrong plan mistakenly.</strong> (Contact
                us, and we will change the plan without any extra cost).
              </li>
              <li>
                <strong>I was out of station/Vacation</strong> and was not able
                to use your server.
              </li>
              <li>
                <strong>
                  No refund will be given if you violate our Terms Of Service.
                </strong>
              </li>
            </ul>

            <p className="mt-6 font-semibold">
              Note: If you do not agree with the above rules, please DO NOT
              place an order. If you open a dispute without any reason or after
              using our service, then no refund will be made in any case, and
              your service will also be terminated. You have to accept our Terms
              Of Service and Refund Policy while placing an order.
            </p>

            <p>
              We appreciate your understanding and cooperation. Our goal is to
              ensure your satisfaction and provide a seamless experience with
              our products/services.
            </p>

            <p>
              <strong>
                To request a refund, please contact our customer support team at{" "}
                <a
                  href="mailto:support@globerdp.com"
                  className="text-cyan-600 font-medium"
                >
                  support@globerdp.com
                </a>{" "}
                or raised a support ticket. Kindly provide your order number,
                reasons for the refund, and any supporting documentation.
              </strong>
            </p>
            <p className="text-center text-sm  mt-8">
              Last Update on 25-May-2023
            </p>
          </div>
        </div>

        <style>
          {`
          .section-title {
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: #0f766e;
          }
        `}
        </style>
      </section>
    </div>
  );
};

export default Refund;
