import { Merriweather, Gothic_A1 } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // enthält "Black" = 900
});

export const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
});
