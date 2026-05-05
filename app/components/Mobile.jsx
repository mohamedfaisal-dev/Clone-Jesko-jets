"use client";
import React from "react";

const Mobile = () => {
  return (
    <div className="w-screen h-dvh flex flex-col justify-center items-center bg-[#1a1a1a] text-[#fff8ed] gap-8 p-8 text-center">
      <h1 className="text-4xl font-unbounded tracking-widest animate-pulse">
        ALL SHADE JETS
      </h1>
      <p className="font-montserrat text-sm uppercase tracking-wide opacity-80 max-w-md">
        For the ultimate immersive experience, please view on a desktop device.
      </p>
      <div className="w-16 h-[1px] bg-[#fff8ed] opacity-30 my-4" />
      <p className="text-xs opacity-50 font-mono">
        Mobile experience coming soon.
      </p>
    </div>
  );
};

export default Mobile;
