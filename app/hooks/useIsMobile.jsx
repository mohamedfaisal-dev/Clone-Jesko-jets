"use client";
import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  // Default mobile breakpoint
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]); // Re-run effect if the breakpoint changes

  return isMobile;
};

export default useIsMobile;
