"use client";
import Blob from "@/app/blob/page";
import "./terms-and-conditions.css"
import Link from "next/link";
import Footers from "@/components/footer";
import Form from "@/components/form";
import { use } from "react";

function TermsAndConditions() {

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  return (
    <main className="text-white relative min-h-screen flex pb-6 mx-14">

      <article className="w-full mx-auto flex flex-col items-center space-y-8 *:space-y-2">
        <h1 className="text-4xl sm:text-7xl font-extrabold gradient-text-t py-14 whitespace-nowrap">
          T<span className="text-2xl sm:text-4xl font-bold">ERMS</span> & C<span className="text-2xl sm:text-4xl font-bold">ONDITIONS</span>
        </h1>

        <section className="max-w-2xl">
          <h2>Introduction</h2>
          <h3 className="text-slate-400 text-sm leading-6 tracking-wider">Welcome to Senslyze Inc. ("Senslyze," "we," "our," or "us") website <Link href={"/"} className="text-blue-200"><u>Senslyze.com</u></Link>. By accessing and using this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. If you do not agree to these terms, please do not access or use this Website. Your continued use of the Website constitutes your acceptance of these Terms of Use. Senslyze reserves the right to modify, alter, or update these terms at any time without prior notice.</h3>
        </section>

        <section className="max-w-2xl">
          <h2>Right to Use</h2>
          <ol className="space-y-6">
            <li>
              <span className="blue"> 1. Limited License</span>
              <ul className="list-none">
                <li><span className="content">Senslyze grants you a non-exclusive, non-transferable, limited right to access, use, and display this Website and the materials thereon for personal and informational purposes only. You may not use the Website for any commercial purposes without obtaining prior written consent from Senslyze.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Permitted Use of Documents
              </span>
              <ul className="list-none">
                <div className="content">You may download and use documents (such as white papers, press releases, and other publications) from this Website, provided that:</div>
                <li>
                  <ol className="list-decimal content pl-6 space-y-2">
                    <li>Senslyze’s copyright notice appears in all copies of the documents.</li>
                    <li>The use of such documents is for informational and non-commercial purposes only and will not be copied, posted on any network computer, or broadcast in any media.</li>
                    <li>No modifications to any documents are made.</li>
                  </ol>
                </li>

                <li className="content">Any unauthorized use is expressly prohibited by law and may result in severe civil and criminal penalties.</li>
              </ul>
            </li>


          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>Intellectual Property Rights</h2>
          <ol>
            <li>
              <span className="text-blue-300">
                1. Ownership
              </span>
              <ul className="list-none">
                <li><span className="content">The design, layout, code, and content of this Website, along with all material present (excluding third-party materials), are the exclusive property of Senslyze and are protected by copyright, trademark, and other intellectual property laws. Copying, reproducing in whole or in part, or creating derivative works in any form or medium without express written permission is prohibited.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Trademarks
              </span>
              <ul className="list-none">
                <li className="contetn"><span className="content">Senslyze’s logo is a registered trademark of Senslyze and is protected by trademark laws. Senslyze and the names of Senslyze’s products referenced on this Website are trademarks of Senslyze. Other products and company names mentioned herein may be trademarks and/or service marks of their respective owners and are acknowledged as such without prejudice.</span></li>
              </ul>
            </li>
          </ol>
        </section>


        <section className="max-w-2xl">
          <h2>Third-Party Content</h2>
          <ol>
            <li>
              <span className="text-blue-300">
                1. External Links
              </span>
              <ul className="list-none">
                <li><span className="content">The Website may contain links to third-party websites or resources. Senslyze is not responsible for the content, accuracy, or opinions expressed on such websites. Accessing these links is at your own risk, and Senslyze is not liable for any damages or losses arising from your use of third-party websites.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Third-Party Content
              </span>
              <ul className="list-none">
                <li><span className="content">The Website may make available information or material provided by third parties. Senslyze does not endorse, warrant, or guarantee the accuracy, completeness, or usefulness of such third-party content. Your reliance on any third-party content is at your own risk.</span></li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>No Warranties</h2>
          <div className="content">ALL INFORMATION AND MATERIAL AVAILABLE ON THIS WEBSITE ARE PROVIDED ON AN "AS IS" BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES OR REPRESENTATIONS OF ANY KIND. SENSLYZE EXPRESSLY DISCLAIMS, TO THE FULLEST EXTENT PERMITTED BY LAW, ALL EXPRESS, IMPLIED, STATUTORY, OR OTHER WARRANTIES OR REPRESENTATIONS, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.</div>
          <div className="content">Senslyze does not guarantee or warrant that files available for downloading from this Website will be free of infection or viruses, worms, Trojan horses, or other codes that manifest contaminating or destructive properties. You are responsible for implementing sufficient procedures and checkpoints to satisfy your requirements for data accuracy, input, and output, and for maintaining external means for the reconstruction of any lost data.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Indemnity & Limitation of Liability</h2>
          <ol>
            <li>
              <span className="blue">
                1. Indemnification
              </span>
              <ul className="list-none">
                <li><span className="content">You agree to indemnify, defend, and hold harmless Senslyze, its subsidiaries, and affiliates from any claim, cost, expense, judgment, damages, or other loss arising out of or in relation to your use of this Website in any manner.</span></li>
              </ul>
            </li>

            <li>
              <span className="blue">
                2. Limitation of Liability
              </span>
              <ul className="list-none">
                <li><span className="content">The entire risk arising out of the use of this Website, its contents, or materials downloaded therefrom remains with the user. In no event shall Senslyze be liable for any direct, consequential, incidental, special, punitive, or other damages whatsoever (including without limitation, damages for loss of business profits, business interruption, or loss of business information) arising out of or in connection with your use or access to the Website (including without limitation non-availability of the Website) even if Senslyze has been advised of the possibility of such damages.</span></li>
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
          </ol>
        </section>

        <section className="max-w-2xl">
          <h2>Data Privacy</h2>
          <div className="content">Data privacy is important to Senslyze. Senslyze has a detailed Data Privacy Policy available on the link Privacy Notice. Senslyze’s Data Privacy Policy describes how we collect, use, and disclose information that we may obtain through this Website or as part of our internal processes.</div>
        </section>

        <section className="max-w-2xl">
          <h2>Laws & Jurisdiction</h2>
          <div className="content">These Terms of Use shall be governed by the laws of India, without giving effect to its conflict of law provisions. Any dispute arising out of or in relation to these Terms of Use shall be subject to the exclusive jurisdiction of the courts at Nagpur, Maharashtra, India.</div>
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


      <Blob params={{ top: "-10%", left: "-10%", right: "", bottom: "" }} />
      <Blob params={{ top: "10%", left: "", right: "-10%", bottom: "" }} />

      <Blob params={{ top: "40%", left: "-10%", right: "", bottom: "" }} />
      <Blob params={{ top: "70%", left: "", right: "-10%", bottom: "" }} />

      <Blob params={{ top: "", left: "-10%", right: "", bottom: "0%" }} />
    </main>
  )
}

export default TermsAndConditions;
