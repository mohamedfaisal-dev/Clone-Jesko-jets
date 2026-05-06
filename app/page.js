"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import dynamic from "next/dynamic";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioBanner from "./components/PortfolioBanner";

const AboutSection = dynamic(() => import("./components/AboutSection"));
const FlightSection = dynamic(() => import("./components/FlightSection"));
const FeaturesSection = dynamic(() => import("./components/FeaturesSection"));
const SkyBackground = dynamic(() => import("./components/SkyBackground"));
const FooterSection = dynamic(() => import("./components/FooterSection"));

import useIsMobile from "./hooks/useIsMobile";
import Mobile from "./components/Mobile";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

// Main component
export default function Home() {
  // Initialize scroll position
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const isMobile = useIsMobile();

  return (
    <main className="w-screen">
      <PortfolioBanner />
      {!isMobile ? (
        <>
          <Header />
          <div data-section-1 className="w-full h-[500vh] bg-container">
            <HeroSection />
            <AboutSection />
            <SkyBackground />
          </div>
          <FlightSection />
          <FeaturesSection />
          <FooterSection />
        </>
      ) : (
        <>
          <Mobile />
        </>
      )}
    </main>
  );
}
