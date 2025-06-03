import { ArrowRight, BellPlus, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <div className="flex flex-col h-auto justify-center items-center px-6 md:px-[8rem] bg-neutral-50 pt-[6rem] py-[6rem] text-neutral-800">
      <div className="flex md:flex-row flex-col justify-center md:justify-between items-center pt-4 w-full md:w-6xl">
        <div className="flex flex-col gap-3 max-w-lg">
          <div className="bg-[#cfff92] w-fit border-[1px] border-neutral-300 text-xs rounded-full px-6 py-1 uppercase z-50">
            <p>✨ About</p>
          </div>
          <h1 className="text-5xl font-medium tracking-tighter">Why now ?</h1>
          <p className="text-md text-neutral-700">
            If you're scaling GTM, you're likely hiring 5–10 salespeople this
            year. One in three will miss quota or churn early.
          </p>
          <p className="text-md text-neutral-700 ">
            Scooter helps you avoid those mistakes using behavior science and real voice/video responses instead of resumes or gut feel.
          </p>
                    <Button className="bg-neutral-800 px-6 w-fit rounded-full py-6 z-50 hover:cursor-pointer">
            Get started for free <ArrowRight className="size-5"/>
          </Button>
        </div>
        <div className="rounded-xl bg-neutral-100 border-[1px] flex flex-col gap-6 border-neutral-300 p-6 w-full md:w-sm mt-[4rem]">
          <div className="flex justify-between items-center">
            <BellPlus />
            <h1 className="text-neutral-500 text-md">
              <span className="text-3xl tracking-tighter font-semibold text-neutral-800">
                $0
              </span>{" "}
              / for early access
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-medium">Pro</h1>
            <div className="bg-[#cfff92] w-fit border-[1px] border-neutral-300 text-xs rounded-full px-3 py-1  z-50">
              <p>Early Access</p>
            </div>
          </div>

          <div>
            <p className="text-lg text-neutral-600">
              We’re prioritizing startups actively hiring in the next 60 days.
            </p>
          </div>

          <Button className="bg-neutral-800 rounded-full font-medium py-4">
            Get started
          </Button>
          <div className="bg-white rounded-xl border-[1px] border-neutral-300 p-6 py-8">
            <h1 className="text-lg text-neutral-600 leading-tight">
              This program is designed for:
            </h1>
            <div className="flex flex-col gap-3 text-md pt-6">
              <div className="flex items-center gap-3">
                <Check className="text-neutral-800 bg-[#cfff92] rounded-full p-1 size-6" />
                Saas or AI Startups
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-neutral-800 bg-[#cfff92] rounded-full p-1 size-6" />
                Teams with 3-50 people
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-neutral-800 bg-[#cfff92] rounded-full p-1 size-6" />
                Founders hiring sales talent
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-neutral-800 bg-[#cfff92] rounded-full p-1 size-6" />
                Teams that want signal not noise
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
