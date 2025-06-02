'use client'

import React from "react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { AvatarCirclesDemo } from "./AvatarCirclesDemo";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <div className="flex md:justify-center md:items-center h-screen md:pt-0 pt-[10rem] relative overflow-hidden">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-58",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />

      <div className="flex flex-col md:justify-center items-center text-center md:px-0 px-6 md:max-w-3xl gap-6 text-neutral-800">
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          animate="visible"
          className="bg-neutral-100 border-[1px] border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-50"
        >
          <p>✨ Early access is limited</p>
        </motion.div>

        <motion.h1
          variants={fadeIn(0.3)}
          initial="hidden"
          animate="visible"
          className="md:text-6xl text-4xl font-medium tracking-tighter"
        >
          Sales hiring is broken — slow, noisy, and full of costly mistakes.
        </motion.h1>

        <motion.p
          variants={fadeIn(0.5)}
          initial="hidden"
          animate="visible"
          className="md:text-lg text-sm max-w-xl text-neutral-700"
        >
          Scooter helps SaaSBOOMi founders hire the right reps, faster — using
          behavior science, not gut feel.
        </motion.p>

        <motion.div
          variants={fadeIn(0.7)}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          <Button className="bg-neutral-800 px-6 rounded-full py-6 z-50">
            Apply for early access →
          </Button>
        </motion.div>

        <motion.div
          variants={fadeIn(0.9)}
          initial="hidden"
          animate="visible"
          className="flex md:flex-row flex-col items-center absolute bottom-[5%] md:bottom-[10%] gap-2"
        >
          <AvatarCirclesDemo />
          <p className="text-xs max-w-xs">
            Join our early access program. No recruiter fees. Just signal-rich
            shortlists, free for SaaSBOOMi founders.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
