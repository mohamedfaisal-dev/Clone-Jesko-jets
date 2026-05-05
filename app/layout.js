import { Unbounded, Montserrat } from "next/font/google";
import "./globals.css";
import "./common.css";
import SmoothScrolling from "./components/SmoothScroll";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "All Shade Jets | Exclusive Private Aviation",
  description: "Experience the pinnacle of luxury travel. All Shade Jets offers undefined freedom and comfort for the discerning traveler.",
  keywords: ["private jet", "luxury travel", "aviation", "all shade jets", "akhlaq ventures", "executive travel"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
