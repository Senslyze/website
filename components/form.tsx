// "use client";
// import React, { useState } from "react";
// import "@/components/form.css";
// import Button from "./ui/button";
// import Blob from "@/app/blob/page";
// import formdata from "@/components/ui/formdata.js";

// interface Country {
//   name: string;
//   dial_code: string;
//   emoji: string;
//   code: string;
// }

// const Form: React.FC = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [message, setMessage] = useState("");
//   // const [isLoading, setIsLoading] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState<Country>(formdata[0]);
//   console.log(selectedCountry);

//   const handleCountryChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ): void => {
//     const countryCode: string = e.target.value;
//     const selected: Country | undefined = formdata.find(
//       (country: Country) => country.code === countryCode
//     );
//     if (selected) {
//       setSelectedCountry(selected);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const value: string = e.target.value;
//     const selectedDialCode: string = value.split(" ")[1];
//     const selected: Country | undefined = formdata.find(
//       (country: Country) => country.dial_code === selectedDialCode
//     );
//     if (selected) {
//       setSelectedCountry(selected);
//     }
//   };

//   const showAlert = (message: string) => {
//     if (typeof window !== "undefined") {
//       window.alert(message);
//     }
//   };

//   const handClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); // Prevent form submission and page reload
//     if (
//       firstName.trim() !== "" &&
//       lastName.trim() !== "" &&
//       email.trim() !== "" &&
//       phoneNo.trim() !== "" &&
//       message.trim() !== ""
//     ) {
//       try {
//         const response = await fetch("/api/sendEmail", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//             email,
//             phoneNo,
//             message,
//             countryCode: selectedCountry.dial_code,
//           }),
//         });
//         const responseData = await response.json();

//         if (response.ok) {
//           console.log("Email sent successfully");
//           showAlert("Email sent successfully.\nThank you for contacting us ! ");
//           setFirstName("");
//           setLastName("");
//           setEmail("");
//           setPhoneNo("");
//           setMessage("");
//         } else {
//           if (response.status === 400) {
//             if (responseData.error.includes("Non-Gmail email")) {
//               console.error("Non-Gmail email used:", responseData.error);
//               showAlert("Non-Gmail email used:" + responseData.error);
//             } else if (responseData.error === "Invalid email address") {
//               console.error("Invalid email address");
//               showAlert("Invalid email address ");
//             }
//             // else if (responseData.error.includes("Invalid phone number")) {
//             //   console.error(
//             //     "Invalid phone number format or phone number. Please provide a valid phone number including country code (+xx) and digits only."
//             //   );
//             // }
//           } else if (response.status === 500) {
//             console.error("Failed to send email:", responseData.error);
//             showAlert(responseData.error);
//           }
//         }
//       } catch (error) {
//         console.error("Error sending email:", error);
//         showAlert("Error sending email , " + error);
//       }
//     } else {
//       console.log("Please fill out all fields.");
//       showAlert("Please fill out all fields.");
//     }
//   };
//   return (
//     <div className="p-4">
//       <Blob params={{ top: "0%", left: "", right: "-30%", bottom: "" }} />
//       <Blob params={{ top: "0%", left: "-30%", right: "", bottom: "" }} />
//       <Blob params={{ top: "", left: "35%", right: "", bottom: "40%" }} />

//       <form action="">
//         <div
//           id="form-wrapper"
//           className="max-w-[800px] relative mx-auto w-full z-10 overflow-hidden p-4"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 p-4 ">
//             <div className="flex flex-col gap-2 w-[90%] mx-auto">
//               <label className="text-[#FFFFFF]" htmlFor="firstname">
//                 FIRST NAME
//               </label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name here "
//                 className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF]"
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 w-[90%] mx-auto">
//               <label className="text-[#FFFFFF]" htmlFor="lastname">
//                 LAST NAME
//               </label>
//               <input
//                 id="lastname"
//                 placeholder="Enter your last name here "
//                 className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF]"
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 w-[90%] mx-auto">
//               <label className="text-[#FFFFFF]" htmlFor="email">
//                 EMAIL
//               </label>
//               <input
//                 id="email"
//                 placeholder="@gmail.com "
//                 className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF]"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 w-[90%] mx-auto">
//               <label className="text-[#FFFFFF]" htmlFor="phoneNo">
//                 PHONE NUMBER
//               </label>
//               <div className="flex items-center">
//                 <input
//                   list="countries"
//                   onChange={handleInputChange}
//                   className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF] bg-transparent max-w-[100px] placeholder-text-lg "
//                   placeholder="+"
//                 />
//                 <datalist id="countries">
//                   {formdata.map((country: Country) => (
//                     <option
//                       key={country.code}
//                       value={`${country.emoji} ${country.dial_code}`}
//                     >
//                       {country.emoji} {country.dial_code}
//                     </option>
//                   ))}
//                 </datalist>

//                 <input
//                   id="phoneNo"
//                   placeholder="Enter phone number"
//                   className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF]"
//                   type="text"
//                   value={phoneNo}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                     setPhoneNo(e.target.value)
//                   }
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2 w-[90%] mx-auto p-5">
//             <label className="text-[#FFFFFF] " htmlFor="lastname">
//               MESSAGE
//             </label>
//             <input
//               id="message"
//               placeholder="Enter your message here "
//               className="border-b border-[#FFFFFF] outline-none p-2 text-[#FFF]"
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </div>

//           <div className="w-[90%] mx-auto flex items-center justify-center  p-4">
//             {/* <button className="text-[#FFFFFF] py-4 px-6 border-[1px] rounded-full p-4">Submit Request</button> */}
//             <button
//               className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] "
//               onClick={handClick}
//             >
//               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFFF_0%,#0047FF_50%,#00FFFF_100%)]" />
//               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//                 Submit Response
//               </span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-[800px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-neutral-800">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Enter your first name here"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Enter your last name here"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">E-Mail</Label>
            <Input id="email" placeholder="@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="000-0000-000" type="tel" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="Enter your Message here..."
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Form;
