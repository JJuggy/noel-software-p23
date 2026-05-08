"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture     = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogoPattern = "/assets/d4648cab6c54298ce57e3ababf3573f3f6a1eeaf.svg";
const imgStepDone    = "/assets/898f0d5fb99d45d897003d0a364ec28483230fc8.svg";
const imgStepActive  = "/assets/ddb109dbf332f7d9722e8cf682d1f691cb0b6eb0.svg";

const STEPS = [
  { num: "1", img: imgStepDone,   color: "#0B1727" },
  { num: "2", img: imgStepDone,   color: "#0B1727" },
  { num: "3", img: imgStepActive, color: "#0B1727" },
  { num: "4", img: imgStepDone,   color: "#0B1727" },
];

interface ToggleSetting {
  id: string;
  label: string;
  description: string;
  defaultOn: boolean;
}

const SETTINGS: ToggleSetting[] = [
  { id: "smart-matching",  label: "Activate Smart Matching",  description: "We'll suggest 3-5 tailored Networks weekly.",       defaultOn: true  },
  { id: "show-profile",    label: "Show Profile in Searches", description: "Your name/industry will appear in results.",         defaultOn: true  },
  { id: "display-deals",   label: "Display Deal Interests",   description: "Helps partners identify collaboration potential.",   defaultOn: true  },
  { id: "hide-activity",   label: "Hide Activity Status",     description: "When ON, others won't see when you're online.",      defaultOn: false },
];

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative shrink-0 overflow-hidden"
      style={{
        width: "64px",
        height: "28px",
        borderRadius: "100px",
        background: on ? "#0B1727" : "#C1BBBB",
        border: "none",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      <span
        className="absolute top-[2px]"
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "100px",
          background: "#FFFFFF",
          transition: "left 0.2s",
          left: on ? "calc(100% - 26px)" : "2px",
        }}
      />
    </button>
  );
}

export default function SignupStep4Page() {
  const router = useRouter();
  const [settings, setSettings] = useState<Record<string, boolean>>(
    Object.fromEntries(SETTINGS.map((s) => [s.id, s.defaultOn]))
  );

  function toggleSetting(id: string) {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
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
      <div className="absolute left-0 top-0 overflow-hidden"
        style={{ width: "535px", height: "100%", background: "#0B1727", boxShadow: "6px 0px 5px #0B1C33" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col"
          style={{ left: "122px", top: "169px", width: "308px" }}
        >
          <h2 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
            We are Here!
          </h2>
          <h2 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Profile Visibility
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
              Step 4/4
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
        <div className="flex flex-col gap-[5px] mb-[48px]">
          <h1 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            Control your visibility
          </h1>
          <p className="m-0 text-[20px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>
            You can change these anytime.
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); router.push("/loading"); }} className="flex flex-col">
          {/* Toggle rows */}
          <div className="flex flex-col gap-[33px] mb-[48px]">
            {SETTINGS.map((setting) => (
              <motion.div
                key={setting.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + SETTINGS.indexOf(setting) * 0.07, duration: 0.35 }}
                className="flex items-center justify-between"
                style={{ width: "536px", height: "56px" }}
              >
                <div className="flex flex-col gap-[4px]" style={{ width: "310px" }}>
                  <span className="text-[16px] leading-[20px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>
                    {setting.label}
                  </span>
                  <span className="text-[13px] leading-[16px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>
                    {setting.description}
                  </span>
                </div>
                <Toggle on={settings[setting.id]} onToggle={() => toggleSetting(setting.id)} />
              </motion.div>
            ))}
          </div>

          {/* Proceed → dashboard */}
          <button type="submit" className="w-[466px] flex items-center justify-center"
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
