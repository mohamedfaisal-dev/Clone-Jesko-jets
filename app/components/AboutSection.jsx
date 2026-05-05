"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";

const AboutSection = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text-container",
        {
          yPercent: 100,
        },
        {
          yPercent: 50,
          scrollTrigger: {
            trigger: ".about-text-container",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
          },
        },
      );

      const heroText = SplitText.create(".about-text", {
        type: "words, chars",
      });

      gsap.set(heroText.chars, { opacity: 0.2 });

      gsap.fromTo(
        heroText.chars,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            end: "bottom 90%",
            scrub: 1,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
          ease: "power3.out",
          stagger: 0.05,
        },
      );

      gsap.fromTo(
        "[data-about-blur-reveal]",
        {
          filter: `blur(100px)`,
        },
        {
          filter: `blur(0px)`,
          scrollTrigger: {
            trigger: ".about-text-container",
            start: "top 60%",
            end: "bottom center",
          },
          duration: 1.2,
        },
      );
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <section
      ref={aboutRef}
      data-about-parallax
      className="relative about-section w-screen h-screen z-20 flex flex-col justify-start items-center"
    >
      <div className="about-text-container w-full h-full flex flex-col justify-start items-center gap-[10vh]">
        <h3 className="about-text w-full font-montserrat flex justify-start items-start flex-wrap gap-x-2 gap-y-1 max-w-[80%]">
          We believe that travel is not just about reaching a destination, but about the quality of the journey itself.
          Our commitment to excellence ensures that every flight is a masterpiece of comfort, speed, and reliability.
          Experience the art of aviation with All Shade Jets.
        </h3>

        <div className="w-full flex justify-end items-start max-w-[75%]">
          <div
            data-about-blur-reveal
            className="flex flex-wrap justify-between items-center basis-[65%] gap-y-7"
          >
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Global Accessibility
              </h5>
              <p>
                Reach any corner of the globe. Our fleet is capable of long-range missions, connecting continents seamlessly without the hassle of commercial terminals.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Impeccable Privacy
              </h5>
              <p>
                Your security and privacy are paramount. Enjoy discreet terminals and private boarding, ensuring you remain out of the public eye.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Culinary Excellence
              </h5>
              <p>
                Savor gourmet meals prepared by top chefs. Our inflight dining is tailored to your preferences, ensuring a dining experience that rivals the finest restaurants.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Time Management
              </h5>
              <p>
                We value your time. Our efficient operations ensure minimal wait times, allowing you to maximize your productivity or relaxation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
