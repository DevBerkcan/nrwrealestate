import { Merriweather, Gothic_A1 } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
  display: "swap",
});

export const gothic = Gothic_A1({
  subsets: ["latin"],
  variable: "--font-gothic",
  weight: ["400", "700"],
  display: "swap",
});
