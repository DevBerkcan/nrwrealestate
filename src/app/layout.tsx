import type { Metadata } from "next";
import { Gothic_A1, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${merriweather.variable} ${gothic.variable} antialiased`}
>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
