"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const features = [
    {
        title: "Pets",
        id: "pets",
        content:
            "We understand that pets are part of the family. That's why we welcome them on board our jets, ensuring they travel in comfort and style alongside you.",
        image: "/assets/feature-pets.jpg",
    },
    {
        title: "24/7 availability",
        id: "availability",
        content:
            "Our team is ready to serve you around the clock. Whether it's a last-minute flight or a planned journey, we are always available to meet your travel needs.",
        image: "/assets/feature-availability.jpg",
    },
    {
        title: "Onboard services",
        id: "services",
        content:
            "Experience unparalleled luxury with our bespoke onboard services, including gourmet dining, personalized entertainment, and premium amenities.",
        image: "/assets/feature-services.jpg",
    },
    {
        title: "Efficient",
        id: "efficient",
        content:
            "Time is luxury. We optimize every aspect of your journey to ensure maximum efficiency, from quick check-ins to direct routes and fast cruising speeds.",
        image: "/assets/feature-efficient.jpg",
    },
];

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(
        () => {
            // Image Parallax
            gsap.fromTo(
                imageRef.current,
                {
                    y: "-15%",
                },
                {
                    y: "15%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Text Parallax
            gsap.fromTo(
                textRef.current,
                {
                    y: "5%",
                },
                {
                    y: "-5%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="w-screen min-h-screen bg-[#fff8ed] relative flex flex-col md:flex-row overflow-hidden z-50 pt-24"
        >
            {/* Left Content */}
            <div
                ref={textRef}
                className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-10 text-[#171717]"
            >
                <div className="mb-12">
                    <h6 className="font-unbounded text-xs font-bold tracking-widest uppercase mb-2">A Better Way to Fly</h6>
                </div>
                <div className="flex flex-col gap-8 w-full max-w-xl">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="border-b border-[#171717]/20 pb-4 cursor-pointer group"
                            onClick={() => setActiveFeature(index)}
                            onMouseEnter={() => setActiveFeature(index)}
                        >
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-3xl md:text-5xl font-unbounded tracking-tight group-hover:opacity-70 transition-opacity">
                                    {feature.title}
                                </h3>
                                <span className="text-2xl font-light">+</span>
                            </div>
                            <AnimatePresence>
                                {activeFeature === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-4 text-base md:text-lg font-light leading-relaxed max-w-md">
                                            {feature.content}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block w-1/2 h-screen absolute right-0 top-0 overflow-hidden">
                <div
                    ref={imageRef}
                    className="relative w-full h-[130%] -top-[15%] bg-[#e0d8cc]"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={features[activeFeature].id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={features[activeFeature].image}
                                alt={features[activeFeature].title}
                                fill
                                className="object-cover"
                            />
                            {/* Optional overlay for better text contrast/mood */}
                            <div className="absolute inset-0 bg-black/10" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Floating Button */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                    Book the Flight
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </button>
            </div>

            {/* Footer Stats */}
            <div className="absolute bottom-5 left-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#171717]/60">
                Countries Supported <br /> <span className="text-[#171717]">174</span>
            </div>
            <div className="absolute bottom-5 right-1/2 translate-x-1/2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#171717]/60 text-center hidden md:block">
                Based in <br /> <span className="text-[#171717]">Dubai, UAE</span>
            </div>
            <div className="absolute bottom-5 right-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#171717]/60 text-right">
                Local Time <br /> <span className="text-[#171717]">12:46</span>
            </div>
        </section>
    );
};

export default FeaturesSection;

