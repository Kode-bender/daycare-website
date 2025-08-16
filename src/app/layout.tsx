import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amazing DayCare",
  description: "A Home for your child.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${outfit.variable} antialiased`}
      >
      <Toaster />
      <Navbar />
      {children}
      <Footer/>
      </body>
    </html>
  );
}
