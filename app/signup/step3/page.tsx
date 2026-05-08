"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture     = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogoPattern = "/assets/d4648cab6c54298ce57e3ababf3573f3f6a1eeaf.svg";
const imgStepDone    = "/assets/898f0d5fb99d45d897003d0a364ec28483230fc8.svg";
const imgStepActive  = "/assets/ddb109dbf332f7d9722e8cf682d1f691cb0b6eb0.svg";
const imgStepInactive= "/assets/ffc629b1a207d7bdad102b489ef577aea5d18d4d.svg";
const imgChipActive  = "/assets/4404ae2a6a0f3e2235103cd33c98ce52ff1b064b.svg";
const imgChipDefault = "/assets/f3da1b66807764c2a0956f9960022927558447d8.svg";

const STEPS = [
  { num: "1", img: imgStepDone,    color: "#0B1727" },
  { num: "2", img: imgStepDone,    color: "#0B1727" },
  { num: "3", img: imgStepActive,  color: "#0B1727" },
  { num: "4", img: imgStepInactive,color: "#F3F0E9" },
];

const GREAT_AT_TAGS  = ["Sales", "Fundraising", "Product", "Strategy", "Marketing", "Operations"];
const HELP_WITH_TAGS = ["Sales", "Fundraising", "Product", "Strategy", "Marketing", "Operations"];

const TAG_WIDTHS: Record<string, number> = {
  Sales: 120, Fundraising: 160, Product: 130, Strategy: 135, Marketing: 145, Operations: 155,
};

function TagChip({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-[14px] overflow-hidden"
      style={{
        height: "46px",
        background: "#FFFFFF",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0px 3px 2px rgba(33,33,33,0.2)",
        padding: "7px 16px",
      }}
    >
      <img src={active ? imgChipActive : imgChipDefault} alt="" style={{ width: "32px", height: "32px", flexShrink: 0 }} />
      <span
        className="text-[16px] leading-[32px] whitespace-nowrap"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: active ? 1 : 0.5 }}
      >
        {label}
      </span>
    </button>
  );
}

export default function SignupStep3Page() {
  const router = useRouter();
  const [greatAt,   setGreatAt]   = useState<string[]>(["Sales"]);
  const [helpWith,  setHelpWith]  = useState<string[]>(["Sales"]);

  function toggle(list: string[], setList: (v: string[]) => void, tag: string) {
    setList(list.includes(tag) ? list.filter((t) => t !== tag) : [...list, tag]);
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url('${imgTexture}')`, backgroundSize: "1024px 1024px", opacity: 0.12 }} />

      {/* Teal accent bar */}
 <div
        className="absolute z-10"
        style={{
          left: "540px",
          top: "-13px",
          width: "20px",
          height: "961px",
          background: "#2ABFBB",
          borderRadius: "0 10px 30px 0",
        }}
      />
      {/* Left dark panel */}
      <div className="absolute left-0 top-0 overflow-hidden" style={{ width: "535px", height: "100%", background: "#0B1727", boxShadow: "6px 0px 5px #0B1C33" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col"
          style={{ left: "122px", top: "169px", width: "308px" }}
        >
          <h2 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
            Almost There!
          </h2>
          <h2 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Superpowers
          </h2>
          <p className="m-0 text-[13px] leading-[15px] tracking-[0.5px] mt-[15px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>

          {/* Step progress */}
          <div className="flex flex-col mt-[32px] gap-[8px]">
            <div className="flex items-center gap-[10px]">
              {STEPS.map((s) => (
                <div key={s.num} className="relative" style={{ width: "31px", height: "31px" }}>
                  <img src={s.img} alt="" className="absolute inset-0 w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-[12px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: s.color }}>
                    {s.num}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-[13px] leading-[24px] tracking-[0.5px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
              Step 3/4
            </span>
          </div>
        </motion.div>

        {/* Logo pattern */}
        <div className="absolute" style={{ left: "-12px", top: "623px", width: "557px", height: "91px" }}>
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Bottom links */}
        <div className="absolute flex flex-col gap-[1px]" style={{ left: "116px", bottom: "20px", width: "280px" }}>
          <p className="m-0 text-[16px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#F3F0E9" }}>
            <span style={{ fontWeight: 300 }}>{"Already have an account? "}</span>
            <a href="/login" style={{ fontWeight: 600, fontStyle: "italic", color: "#F3F0E9", textDecoration: "none" }}>Sign In</a>
          </p>
          <p className="m-0 text-[16px] leading-[24px] tracking-[0.5px] italic"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Need Help?
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
        style={{ left: "786px", top: "71px", width: "536px" }}
      >
        {/* Heading */}
        <div className="flex flex-col gap-[5px] mb-[24px]">
          <h1 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            {"What's your secret sauce?"}
          </h1>
          <p className="m-0 text-[20px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>
            {"Members will search for these skills!"}
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); router.push("/signup/step4"); }} className="flex flex-col gap-[24px]">
          {/* I'm great at */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>
                {"I'm great at;"}
              </span>
              <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>
                select max 3 tags
              </span>
            </div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[8px]">
              {GREAT_AT_TAGS.map((tag) => (
                <TagChip key={tag} label={tag} active={greatAt.includes(tag)}
                  onToggle={() => toggle(greatAt, setGreatAt, tag)} />
              ))}
            </div>
          </div>

          {/* I can help others with */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>
                {"I can help others with;"}
              </span>
              <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>
                select max 3 tags
              </span>
            </div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[8px]">
              {HELP_WITH_TAGS.map((tag) => (
                <TagChip key={tag} label={tag} active={helpWith.includes(tag)}
                  onToggle={() => toggle(helpWith, setHelpWith, tag)} />
              ))}
            </div>
          </div>

          {/* Proceed */}
          <button type="submit" className="w-full flex items-center justify-center mt-[8px]"
            style={{ height: "77px", background: "#2ABFBB", borderRadius: "20px", border: "none", cursor: "pointer" }}>
            <span className="text-[20px] leading-[24px] tracking-[0.5px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>
              Proceed
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
