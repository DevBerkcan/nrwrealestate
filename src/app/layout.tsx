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
  weight: ["400", "500", "600", "700"],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "NRW Real Estate GmbH",
  description: "NRW Real Estate verbindet exklusiven Wohnraum mit digitalem Service – für Käufer, Investoren und Eigentümer, die mehr erwarten.",
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
