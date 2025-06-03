import {
  Calendar1,
  IdCard,
  MonitorPlay,
  Trophy,
  UserSearch,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefit = () => {
  return (
    <div className="flex flex-col items-center h-auto px-6 md:px-[6rem] bg-neutral-50 pt-[6rem] text-neutral-800">
      <div className="bg-[#cfff92] border-[1px] border-neutral-300 text-xs rounded-full px-6 py-1 uppercase z-50">
        <p>✨ Our toolkit</p>
      </div>
      <div className="flex flex-col gap-3 max-w-2xl items-center justify-between text-center pt-4">
        <h1 className="text-5xl font-medium tracking-tighter">What you get</h1>
        <p className="text-md text-neutral-700">
          Access a complete toolkit — from behavior-based assessments to
          strategic guidance — designed to help you hire the right sales reps,
          faster and smarter.
        </p>
        {/* <Image src='/toolkit.png' alt="Toolkit" width={150} height={150} /> */}
      </div>

      <div className="flex md:flex-row flex-col gap-14 w-full md:max-w-4xl items-center justify-center pt-[4rem]">
        {/* Tangible Tools */}
        <div className="rounded-3xl bg-stone-200 p-4 w-full md:min-w-[40%] hover:cursor-pointer hover:scale-[1.006] duration-300 transition-all">
          <div className="rounded-3xl bg-neutral-800 p-6 text-white min-h-[60vh]">
            <h1 className="text-2xl font-medium tracking-tighter text-center underline underline-offset-4">
              Tangible Tools
            </h1>
            <div className="flex flex-col pt-[2rem] gap-6 text-neutral-400 px-3">
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <IdCard className="text-neutral-100" />
                <div className="pt-3">
                  <p className="text-md text-neutral-200">
                    Structured scorecards
                  </p>
                  <p className="text-xs">
                    See how each rep ranks on key behaviors
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <MonitorPlay className="text-neutral-100" />
                <div className="pt-3">
                  <p className="text-md text-neutral-200">
                    Async video assessments
                  </p>
                  <p className="text-xs">
                    Candidates pitch, respond, and solve on their own time
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <Trophy className="text-neutral-100" />
                <div className="pt-3">
                  <p className="text-md text-neutral-200">Ranked shortlist</p>
                  <p className="text-xs">
                    Only the most aligned reps, vetted and ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Behavioral Assessments */}
        <div className="rounded-3xl bg-neutral-800 p-4 w-full md:min-w-[40%] hover:cursor-pointer hover:scale-[1.006] duration-300 transition-all">
          <div className="rounded-3xl bg-neutral-100 p-6 text-neutral-800 min-h-[60vh]">
            <h1 className="text-2xl font-medium tracking-tighter text-center underline underline-offset-4">
              Strategic Support
            </h1>
            <div className="flex flex-col pt-[2rem] gap-6 p-3">
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <UserSearch />
                <div className="pt-3">
                  <p className="text-md">6 months of guided hiring</p>
                  <p className="text-xs">
                    We help you find the right reps, faster
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <Calendar1 />
                <div className="pt-3">
                  <p className="text-md">1:1 Session</p>
                  <p className="text-xs">
                    Tailored sessions to scope and calibrate
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-neutral-400 pb-2">
                <IdCard />
                <div className="pt-3">
                  <p className="text-md">Pricing that scales with you</p>
                  <p className="text-xs">Price is based on your team size</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
