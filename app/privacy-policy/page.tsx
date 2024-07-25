"use client";
import Blob from "@/app/blob/page";
import "./privacy-policy.css"
import Link from "next/link";
import Footers from "@/components/footer";
import Form from "@/components/form";

function PrivacyPolicyPage() {
  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  return (
    <main className="text-white relative min-h-screen flex pb-6">

      <article className="w-full mx-auto flex flex-col items-center space-y-8 *:space-y-2">
        <h1 className="text-7xl font-extrabold gradient-text-t py-14 whitespace-nowrap">
          P<span className="text-4xl font-bold">RIVACY</span> P<span className="text-4xl font-bold">OLICY</span>
        </h1>

        <section className="max-w-2xl">
          <h2>Introduction</h2>
          <h3 className="text-slate-400 text-sm leading-6 tracking-wider">At Senslyze Inc. ("Senslyze," "we," "our," or "us"), your privacy is of utmost importance to us. We are dedicated to protecting the personal information you share with us. This Privacy Policy outlines our practices concerning the collection, use, disclosure, and safeguarding of your information when you visit our website <Link href={"/"} className="text-blue-200"><u>Senslyze.com</u></Link> and use our services. By accessing or using our Website, you agree to the terms of this Privacy Policy.</h3>
        </section>

        <section className="max-w-2xl">
          <h2>Information We Collect</h2>
          <ol className="space-y-6">
            <li>
              <span className="blue"> 1. Personal Information </span>
              <ul className="space-y-2 list-none">
                <li><span className="blue">Contact Information</span>: <span className="content">We may collect your name, email address, phone number, and mailing address when you interact with our Website or services.</span></li>
                <li><span className="blue">Identification Information</span>: <span className="content">To verify your identity, we might collect your date of birth and government-issued identification numbers.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Non-Personal Information
              </span>
              <ul className="list-none">
                <li><span className="blue">Usage Data</span>: <span className="content">We automatically collect information about how you use our Website, such as your IP address, browser type, operating system, access times, and the referring URL.</span></li>
                <li><span className="blue">Cookies and Tracking Technologies</span>: <span className="content">We use cookies, web beacons, and other tracking technologies to collect data on your interaction with our Website, enhancing your user experience and delivering personalized content.</span></li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>Information We Collect from Clients</h2>
          <ol>
            <li>
              <span className="text-blue-300">
                1. Business Information
              </span>
              <ul className="list-none">
                <li><span className="blue">Company Details</span>: <span className="content">We may collect your company name, industry, and other business-related information.</span></li>
                <li><span className="blue">Project Information</span>: <span className="content">We collect information about your project requirements, objectives, and any other relevant details necessary for providing our services.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Client Communication
              </span>
              <ul className="list-none">
                <li className="!list-disc"><span className="blue">Correspondence</span>: <span className="content">We keep records of all communications with our clients, including emails, phone calls, and meeting notes.</span></li>
              </ul>
            </li>
          </ol>
        </section>


        <section className="max-w-2xl">
          <h2>How We Use Your Information</h2>
          <ol>
            <li>
              <span className="text-blue-300">
                1. To Provide Services
              </span>
              <ul className="list-none">
                <li><span className="content">We use your information to process and manage your requests, orders, and payments, ensuring seamless service delivery.</span></li>
                <li><span className="content">We communicate with you about our services, updates, and any issues related to your transactions.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. For Marketing and Promotional Purposes
              </span>
              <ul className="list-none">
                <li><span className="content">With your consent, we send you promotional materials, newsletters, and other information about our services and products that might interest you.</span></li>
                <li><span className="content">We use the information to personalize your experience and provide recommendations based on your preferences.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                3. To Improve Our Services
              </span>
              <ul className="list-none">
                <li><span className="content">We analyze usage trends and gather statistical information to enhance our Website’s functionality and improve our services.</span></li>
                <li><span className="content">We use feedback and data to develop new features and offerings that better serve your needs.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                4. For Legal and Compliance Purposes
              </span>
              <ul className="list-none">
                <li><span className="content">We use your information to comply with legal obligations, resolve disputes, and enforce our agreements.</span></li>
                <li><span className="content">We ensure that our practices are in line with regulatory requirements and protect against legal claims.</span></li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl">
          <ol>
            <li>
              <span className="blue">
                1. With Service Providers
              </span>
              <ul className="list-none">
                <li><span className="content">We may share your information with third-party service providers who assist us with payment processing, data analysis, email delivery, and other essential services. These providers are bound by confidentiality agreements and are not permitted to use your information for any other purpose.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. With Affiliates and Partners
              </span>
              <ul className="list-none">
                <li><span className="content">We may share your information with our affiliates and partners for joint marketing and promotional activities. These entities are required to adhere to privacy practices consistent with ours.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                3. For Legal Reasons
              </span>
              <ul className="list-none">
                <li><span className="content">We may disclose your information if required by law or if we believe that such action is necessary to protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or others.</span></li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>Data Securtiy</h2>
          <div className="content">We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. These measures include encryption, access controls, and secure hosting environments. However, please note that no internet-based site can be 100% secure, and we cannot guarantee absolute security.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Your Rights</h2>
          <ol>
            <li>
              <span className="blue">
                1. Access and Correction
              </span>
              <ul className="list-none">
                <li><span className="content">You have the right to access and correct the personal information we hold about you. You can request updates or corrections to ensure your information is accurate and complete.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Data Portability
              </span>
              <ul className="list-none">
                <li><span className="content">You can request a copy of your personal data in a structured, commonly used, and machine-readable format. This allows you to transfer your data to another service provider if desired.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                3. Deletion
              </span>
              <ul className="list-none">
                <li><span className="content">You can request the deletion of your personal data, subject to certain legal obligations that may require us to retain specific information for a designated period.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                3. Withdrawal of Consent
              </span>
              <ul className="list-none">
                <li><span className="content">You can withdraw your consent to the processing of your personal data at any time. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent.</span></li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>Cookies and Tracking Technologies</h2>
          <div className="content">Our Website uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookies through your browser settings. However, disabling cookies may affect the functionality and features of our Website.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Changes to This Privacy Policy</h2>
          <div className="content">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. Your continued use of the Website after any changes indicates your acceptance of the revised Privacy Policy.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Contact Us</h2>
          <div className="content">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</div>
        </section>

        <section className="max-w-2xl">
          <h2>Senslyze Inc.</h2>
          <div className="content">
            Address: Plot No.14 ,SBI Colony,
            Shirke Layout, Raj Nagar,
            Katol Road , Nagpur,
            440013
            Email:  info@senslyze.com
            Phone: 8446681324
          </div>

        </section>

        <section className="max-w-2xl">
          <h2>Jurisdiction</h2>
          <div className="content">This Privacy Policy shall be governed by the laws of India. Any dispute arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts at Nagpur, Maharashtra, India.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Copyright © 2024 Senslyze Inc. All rights reserved.</h2>
          <div className="content">This Privacy Policy complies with Indian laws, including the Information Technology Act, 2000, and the rules thereunder.</div>
        </section>

        <div
        id="ContactsUs"
        className="flex  min-h-screen w-full flex-col items-center justify-center "
      >
        <div className="wrapper">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#00ffff] to-[#0047ff]">Contact Us</span>
        </div>

        <div className="container relative md:max-w-[66.66%]">
          <Form></Form>
        </div>
      </div>

      <div
        className="m-auto flex h-[2px] w-[80vw] bg-gradient-to-tr from-blue-300 to-green-700"
        style={{ borderRadius: "50%" }}
      ></div>

      {/* ======== */}
      <div className="relative mt-44 overflow-y-hidden pb-5">
        <Footers />
      </div>

        
      </article>


      <Blob params={{ top: "-10%", left: "-20%", right: "", bottom: "" }} />
      <Blob params={{ top: "10%", left: "", right: "-21%", bottom: "" }} />

      <Blob params={{ top: "40%", left: "-20%", right: "", bottom: "" }} />
      <Blob params={{ top: "70%", left: "", right: "-10%", bottom: "" }} />

      <Blob params={{ top: "", left: "-20%", right: "", bottom: "0%" }} />
    </main>
  )
}

export default PrivacyPolicyPage;
