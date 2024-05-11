import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["200", "400", "500"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Senslyze",
  description: "Channelize Your Ideas to Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "dark")}>{children}</body>
    </html>
  );
}
