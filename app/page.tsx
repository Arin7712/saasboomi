"use client";

import Benefit from "@/components/Benefit";
import { Demo } from "@/components/Demo";
import Hero from "@/components/Hero";
import { AnimatedGridPattern } from "@/components/magicui/grid-pattern";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import Work from "@/components/Work";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Pricing2 from "@/components/Pricing2";
import About from "@/components/About";
import {Element} from 'react-scroll'

// Variant generator with delay
const fadeInUpWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const page = () => {
  return (
    <div>
      <Element name="hero">
      <Hero />
      </Element>
      <Benefit />
      <Pricing2/>
      <Pricing />
      <Work />
      <About/>
      <Testimonials />

      {/* Sales section with animation */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex relative flex-col h-[70vh] justify-between items-center text-center rounded-4xl mx-6 md:mx-[6rem] bg-[#cfff92] mt-[6rem] mb-[6rem] p-6 md:p-[4rem] text-neutral-800"
      >
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 w-full h-full opacity-40",
            "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
            "mask-size-100 mask-repeat-no-repeat",
            "pointer-events-none"
          )}
        />
        <motion.div
          variants={fadeInUpWithDelay(0.2)}
          className="space-y-3 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl tracking-tighter font-semibold md:max-w-xl">
            Hiring for sales in the next 60 days ? Join now.
          </h1>
          <p className="text-md max-w-md">
            Join a handpicked group of SaaS and AI startup founders shaping the
            future of sales hiring.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpWithDelay(0.5)}
          className="flex flex-col gap-2 justify-between items-center"
        >
          <Button className="bg-neutral-800 px-6 rounded-full py-6 z-50 hover:cursor-pointer">
            Apply for early access <ArrowRight className="size-5" />
          </Button>
          <p className="text-xs max-w-lg font-medium z-50">
            Onboarding starts in July. Apply now for free early access and a
            1-hour strategy session with our founding team.
          </p>
        </motion.div>
      </motion.div>

      <Demo />
    </div>
  );
};

export default page;
