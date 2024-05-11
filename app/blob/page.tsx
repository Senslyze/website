// "use client";
// import React from "react";
// import "@/app/blob/blob.css";

// interface BlobProps {
//   position?: { top: string; left: string; right: string; bottom: string };
// }

// const Blob: React.FC<BlobProps> = ({ position }) => {
//   return (
//     <>
//       <div className="blob" style={position}></div>
//     </>
//   );
// };

// export default Blob;

import React from "react";
import "@/app/blob/blob.css";

export default function Blob({
  params,
}: {
  params: { top: string; left: string; right: string; bottom: string };
}) {
  const style = {
    top: params.top,
    left: params.left,
    right: params.right,
    bottom: params.bottom,
  };

  return (
    <>
      <div className="blob" style={style}></div>
    </>
  );
}
