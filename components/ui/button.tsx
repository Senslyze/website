"use client";
import React, { useState } from "react";

type Props = {
  text: string;
  position?: {
    top: string;
    left: string;
  };
  onClick: () => void; // Add the onClick prop here
};

const Button: React.FC<Props> = ({ text, position }) => {
  return (
    <div
      style={{ position: "absolute", top: position?.top, left: position?.left }}
    >
      <button id=""className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFFF_0%,#0047FF_50%,#00FFFF_100%)]" />
        <span  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium  backdrop-blur-3xl ">
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;

// #00FFFF
// #0047FF
// focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50

//
//
//

//
//
//

// "use client";
// import React, { useState } from "react";
// import "@/components/button.css";

// type Props = {
//   text: string;
//   position?: {
//     top: string;
//     left: string;
//   };
//   onClick: () => void; // Add the onClick prop here
// };

// const Button: React.FC<Props> = ({ text, position }) => {
//   return (
//     <div
//       style={{ position: "absolute", top: position?.top, left: position?.left }}
//     >
//       <div className="button-border" />
//       <button className="button-inner">
//         <span className="button-content">{text}</span>
//       </button>
//     </div>
//   );
// };
// export default Button;
