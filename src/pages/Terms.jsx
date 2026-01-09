import React from "react";
import { useEffect } from "react";

function Terms() {
  useEffect(() => {
    document.title = "Terms Of Service - GlobeRDP";
  }, []);
  return (
    <div>
      {/* Title Section */}
      <section className="text-center md:text-left bgFooter">
        <div className="flex flex-col items-center text-white md:justify-between m-2 p-15">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Services
          </h1>
          <p className="text-lg">
            Get to know about GlobeRDP Terms Of Services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-conditions pt-24 pb-24 max-w-6xl justify-self-center bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="single-privacy bg-white shadow-lg rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
              Welcome to GlobeRDP Terms Of Service
            </h3>

            <p className="text-gray-600 mb-6">
              The following terms and conditions (these “Terms”) govern the
              provision by GlobeRDP of the services and/or products (referred
              collectively herein as “Services and Products”) described on the
              Server Order Form, the Service Level Agreement and Service Exhibit
              attached hereto (collectively the “Service Descriptions”) and
              defined in any of the Company’s product support listing, to the
              customer (“Customer”) identified on the Service Descriptions. The
              Service Descriptions, these Terms and the attachments and any
              addenda hereto, executed with respect to the Services and
              Products, are referred to herein, collectively, as this
              “Agreement.”
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Account Setup / Email and Phone Number on file
            </h4>
            <p className="text-gray-600 mb-6">
              We will setup your account after we have received payment and we
              and/or our payment partner(s) have screened the order(s) incase of
              fraud.
              <br />
              A valid phone number is required for order setup.
              <br />
              In addition, it is your responsibility to provide us with an email
              address which is not @ the domain(s) you are signing up under.
              <br />
              If there is ever an abuse issue or we in to contact you, the
              primary email address on file will be used for this purpose.{" "}
              <br />
              It is your responsibility to ensure the email address on file is
              current and/or up to date at all times. <br />
              In high risk transactions, it may be necessary to provide
              government issued identification and possibly a scan of the credit
              card used for the purchase. <br />
              Providing false contact information of any kind may result in the
              termination of your account. <br />
              If you fail to meet these requirements, the order may be
              considered fraudulent in nature and be denied.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Account Content
            </h4>
            <p className="text-gray-600 mb-6">
              All services provided by <strong>GlobeRDP</strong> may only be used
              for lawful practices and purposes. Every customer agrees to
              indemnify and hold harmless <strong>GlobeRDP</strong> from any
              claims resulting from use of our services. In addition, the use of
              our services to infringe upon any copyright or trademark is
              adamantly prohibited. This includes but is not limited to
              unauthorized copying of music, books, photographs, or any other
              copyrighted material. Any offer of sale of any counterfeit
              merchandise of a trademark holder will result in the immediate
              termination of your account. If you believe that your copyright or
              trademark is being infringed upon, please email
              <br />
              <a
                href="mailto:support@globerdp.com"
                className="text-cyan-600 font-medium"
              >
                support@globerdp.com
              </a>{" "}
              with the information required. Examples of unacceptable material
              on VPS, RDP Servers and Dedicated Servers are listed in AUP. For
              more informations please check{" "}
              <strong> Acceptable Usage Policy </strong> We reserve the right to
              refuse service to anyone. Any material that, in our judgement, is
              obscene or threatening is prohibited and will be removed from our
              servers with or without notice. Failure to respond to email from
              our abuse department within 48 hours may result in the suspension
              or termination of your services. All abuse issues must be dealt
              with via support ticket/email and will have a response within 48
              hours. If in doubt regarding the acceptability of your site or
              service, please contact us at{" "}
              <a
                href="mailto:support@globerdp.com"
                className="text-cyan-600 font-medium"
              >
                support@globerdp.com
              </a>{" "}
              and we will be happy to assist you. Potential harm to minors is
              strictly forbidden, including but not limited to child pornography
              or content perceived to be child pornography: Any site found to
              host child pornography or linking to child pornography will be
              suspended immediately without notice. Violations will be reported
              to the appropriate law enforcement agency.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Zero Tolerance Spam Policy
            </h4>
            <p className="text-gray-600 mb-6">
              We take a zero tolerance stance against sending of unsolicited
              e-mail, bulk emailing, and spam. "Safe lists" and "double opt-in"
              will be treated as spam. Any user who sends out spam will have
              their account terminated with or without notice. Sites advertised
              via SPAM (Spamvertised) may not be hosted on our servers. This
              provision includes, but is not limited to SPAM sent via fax,
              email, instant messaging, or usernet/newsgroups. No organization
              or entity listed in the ROKSO may be hosted on our servers. Any
              account which results in our IP space being blacklisted will be
              immediately suspended and/or terminated. <strong>GlobeRDP</strong>{" "}
              reserves the right to require changes or disable as necessary any
              RDP Servers, Account, VPS, or other component that does not comply
              with its established policies, or to make any such modifications
              in an emergency at its sole discretion. <strong>GlobeRDP</strong>{" "}
              reserves the right to charge the holder of the account used to
              send any unsolicited e-mail a clean up fee. This cost of the clean
              up fee is entirely at the discretion of <strong>GlobeRDP</strong> .
              The clean up fee will contain fee from damages to the servers, the
              process of cleaning the Spam up, and then a fee for all other
              costs associated at are discretion.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Payment Information
            </h4>
            <p className="text-gray-600 mb-6">
              You agree to supply appropriate payment for the services received
              from <strong> GlobeRDP</strong> , in advance of the time period
              during which such services are provided. You agree that until and
              unless you notify <strong>GlobeRDP</strong> of your desire to
              cancel any or all services received, those services will be billed
              on a recurring basis. Cancellations must be done in via the
              cancellation form provided in the client area. To get to this area
              please follow these directions: Client Area &gt; My Services &gt;
              Request Cancellation. Once we receive your cancellation and have
              confirmed all necessary information with you via e-mail, we will
              inform you that your account has been canceled. At this time, your
              account with us has been canceled. If you do not hear back from us
              or receive an e-mail confirming this cancellation, please contact
              us immediately. As a client of <strong>GlobeRDP</strong> , it is
              your responsibility to ensure that your payment information is up
              to date, and that all invoices are paid on time.{" "}
              <strong>GlobeRDP</strong> provides a 10 day grace period from the
              time the invoice is due and when it must be paid. Any invoice that
              is overdue for 10 days and not paid will result in a late fee
              and/or an account suspension until account balance has been paid
              in full. Invoices that have been paid more than once with multiple
              PayPal Subscriptions can only be added as credit towards the
              account and cannot be refunded via PayPal. If you require
              assistance with this provision, please contact{" "}
              <a
                href="mailto:support@globerdp.com"
                className="text-cyan-600 font-medium"
              >
                support@globerdp.com
              </a>{" "}
              <strong>GlobeRDP</strong> reserves the right to change the monthly
              payment amount and any other charges at any time. Current{" "}
              <strong>GlobeRDP</strong> clients will never pay more for a monthly
              service than at the time of sign up. This is void when signing up
              under a Promotion.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Backups and Data Loss
            </h4>
            <p className="text-gray-600 mb-6">
              Your use of the service is at your sole risk unless and until
              specified in the service we offer. <strong>GlobeRDP</strong> is not
              responsible for files and/or data residing on your account. You
              agree to take full responsibility for files and data transferred
              and to maintain all appropriate backup of files and data stored on{" "}
              <strong>GlobeRDP</strong> servers.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Change of Plans, Cancellations, and Payments
            </h4>
            <p className="text-gray-600 mb-6">
              <b>GlobeRDP </b> reserves the right to alter, change, amend, or
              delete fees at its sole discretion. <b>GlobeRDP </b> further
              reserves the right to institute new services and charge fees in
              association with the provision of such new services as it deems
              appropriate.
              <b>GlobeRDP </b> reserves the right to offer promotional rates
              which may or may not be more favorable than the terms under which
              you entered this agreement. Any special rates shall not affect the
              existing rights and responsibilities of each party.{" "}
              <b>GlobeRDP </b> also reserves the right to change the rate charged
              for any such fee under this agreement with 30 days notice.
              <br />
              <b>Payment of Fees</b> – We accept payment by PhonePe, Credit
              &amp; Debit Cards,Net Banking ,UPI, stripe, and Paytm.
              <br />
              <b>Payment Obligations:</b> Full payment is required in advance
              before service is established. We send out invoices that are due
              every pay period. You are given four (04) days to fully pay the
              invoice. You warrant and represent that the information you supply
              in the order form (or other information that <b>GlobeRDP </b> may
              require) is accurate and truthful. All payment-due notices will be
              sent by email. No bills or invoices will be sent by postal mail or
              fax. If payment is not received by due date, your account will be
              suspended. To have your account re-established, you will in to pay
              the monthly fees.
              <br />
              <b>Renewals:</b> Your account will be automatically renewed under
              the same time and fee structure unless you give written notice to
              fourteen (14) days before the renewal date that you do not wish to
              renew or make changes to such term of this agreement.
              <br />
              <b>Cancellations:</b> All cancellation requests must be sent 5
              (five) days before the due date of the invoice. If you do not
              raise a cancellation request and are not paying the invoice as
              well, the due date is the server expiration date. The server will
              be wiped of all data due to customer privacy. Data on the server
              will be retained only if a cancellation request is received well
              in time.
              <br />
              <b>Payment Disputes and Chargebacks:</b>
              Customer agrees to contact our billing department and attempt to
              resolve any billing issues before filing a dispute / payment
              chargeback. The decision of the bank / payment processor will be
              final and binding once a payment dispute / chargeback is filed.{" "}
              <b>GlobeRDP </b> will in no case overrule this decision.
              <b>GlobeRDP </b> may at its sole discretion place the customer
              account on temporary suspension until the charge-back / payment
              dispute is resolved. Violations of the Terms of Service will
              waive/void the refund policy.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Resource Usage Policy
            </h4>
            <p className="text-gray-600 mb-6">
              <b>Bandwidth Usage: </b>All servers / accounts are provided with
              unmetered bandwidth limits as per the plans selected. Customers
              are requested to use these wisely. We reserve the right to review
              / amend / downgrade / upgrade / modify this allocation any time if
              we feel that this is affecting the server / network performance.
            </p>
            <p className="text-gray-600 mb-6">
              <b>Memory Usage: </b>We reserve the right to monitor the memory
              (RAM / Processor) performance of our servers at all the time. We
              reserve the right to suspend services (temporarily or permanently)
              if we find that high memory consumption is affecting network
              performance.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Price Change
            </h4>
            <p className="text-gray-600 mb-6">
              The amount you pay for your service will not increase from the
              date of purchase in the current billing cycle, however prices may
              be increased from next billing cycle. We reserve the right to
              change prices listed on our websites, and the right to
              increase/decrease the amount of resources given to plans at any
              time.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Indemnification
            </h4>
            <p className="text-gray-600 mb-6">
              Customer agrees that it shall defend, indemnify, save and hold{" "}
              <b>GlobeRDP </b> harmless from any and all demands, liabilities,
              losses, costs and claims, including reasonable attorney's fees
              asserted against GlobeRDP.com, its agents, its customers, officers
              and employees, that may arise or result from any service provided
              or performed or agreed to be performed or any product sold by
              customer, its agents, employees or assigns. Customer agrees to
              defend, indemnify and hold harmless <b>GlobeRDP </b> against
              liabilities arising out of:
              <br />
              Any injury to person or property caused by any products sold or
              otherwise distributed in connection with <b>GlobeRDP </b> <br />
              Any material supplied by customer infringing or allegedly
              infringing on the proprietary rights of a third party;
              <br />
              Copyright infringement and any defective products sold to
              customers from <b>GlobeRDP </b> server.
            </p>
            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Arbitration
            </h4>
            <p className="text-gray-600 mb-6 ">
              By using any <b>GlobeRDP </b> services, you agree to binding
              arbitration. If any disputes or claims arise against{" "}
              <b>GlobeRDP </b> or its subsidiaries, such disputes will be handled
              by an arbitrator of <b>GlobeRDP </b> choice. All decisions rendered
              by that arbitrator will be binding and final. You are also
              responsible for any and all costs related to such arbitration.
            </p>
            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Disclaimer
            </h4>
            <p className="text-gray-600 mb-6">
              <b>GlobeRDP </b> shall not be responsible for any damages your
              business may suffer.
              <br />
              <b>GlobeRDP </b> makes no warranties of any kind, expressed or
              implied for services we provide.
              <br />
              <b>GlobeRDP </b> disclaims any warranty or merchantability or
              fitness for a particular purpose.
              <br />
              This includes loss of data resulting from delays, no deliveries,
              wrong delivery, and any and all service interruptions caused by{" "}
              <b>GlobeRDP </b> and its employees.
            </p>
            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Disclosure to law enforcement
            </h4>
            <p className="text-gray-600 mb-6">
              <b>NeedRDP </b> may disclose any subscriber information to law
              enforcement agencies without further consent or notification to
              the subscriber upon lawful request from such agencies.
              <br />
              We will cooperate fully with law enforcement agencies.
            </p>

            <h4 className="text-2xl font-semibold text-green-500 mt-8 mb-4">
              Changes to the Terms
            </h4>
            <p className="text-gray-600 mb-6">
              <b>NeedRDP </b> reserves the right to revise its policies at any
              time without notice.
            </p>

            <p className="text-gray-600 mb-6">
              <b>
                By purchasing any of our services, you already agree to this
                Terms of Service (ToS) Agreement. If you don’t agree to these
                services, either don’t purchase any service or if already
                purchased, immediately cancel it. No refund will be processed in
                such case.
              </b>
            </p>
            <p>
              <p>Last Update on 25-May-2023</p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
