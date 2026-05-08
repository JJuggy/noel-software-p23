"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture     = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogoPattern = "/assets/d4648cab6c54298ce57e3ababf3573f3f6a1eeaf.svg";
const imgStep1Done   = "/assets/898f0d5fb99d45d897003d0a364ec28483230fc8.svg";
const imgStep2Done   = "/assets/898f0d5fb99d45d897003d0a364ec28483230fc8.svg";
const imgStep3Active = "/assets/182ca996c4f52a8009f78e103169333d7ecdf710.svg";
const imgStep4       = "/assets/ffc629b1a207d7bdad102b489ef577aea5d18d4d.svg";
const imgDropdown    = "/assets/4dd797e2e1e5acb0e55e6b8500f224492122e5c6.svg";
const imgChipActive  = "/assets/4404ae2a6a0f3e2235103cd33c98ce52ff1b064b.svg";
const imgChipDefault = "/assets/f3da1b66807764c2a0956f9960022927558447d8.svg";

const CHIPS = [
  { label: "Business",    width: 174 },
  { label: "Engineering", width: 185 },
  { label: "Tech",        width: 124 },
  { label: "Finance",     width: 134 },
];

const STEPS = [
  { num: "1", img: imgStep1Done,   active: false, done: true  },
  { num: "2", img: imgStep2Done,   active: false, done: true  },
  { num: "3", img: imgStep3Active, active: true,  done: false },
  { num: "4", img: imgStep4,       active: false, done: false },
];

function FloatingInput({
  label,
  value,
  onChange,
  rightIcon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rightIcon?: React.ReactNode;
}) {
  return (
    <div className="relative" style={{ height: "76px" }}>
      <div
        className="absolute z-10 bg-white"
        style={{ left: "33px", top: 0, padding: "10px 14px" }}
      >
        <span
          className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#0B1727" }}
        >
          {label}
        </span>
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute bottom-0 w-full outline-none bg-white"
        style={{
          height: "57px",
          border: "2px solid #0B1727",
          borderRadius: "20px",
          opacity: 0.8,
          paddingLeft: "47px",
          paddingRight: rightIcon ? "48px" : "20px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          color: "#0B1727",
        }}
      />
      {rightIcon && (
        <div className="absolute bottom-0 right-[16px] flex items-center" style={{ height: "57px" }}>
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export default function SignupStep2Page() {
  const router = useRouter();
  const [companyName, setCompanyName]   = useState("");
  const [companyDesc, setCompanyDesc]   = useState("");
  const [industry, setIndustry]         = useState("");
  const [selected, setSelected]         = useState<string[]>(["Business"]);

  function toggleChip(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  }

  function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    router.push("/signup/step3");
  }

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url('${imgTexture}')`, backgroundSize: "1024px 1024px", opacity: 0.12 }}
      />

      {/* ── Desktop: teal accent bar ── */}
      <div
        className="hidden md:block absolute z-10"
        style={{ left: "540px", top: "-13px", width: "20px", height: "961px", background: "#2ABFBB", borderRadius: "0 10px 30px 0" }}
      />

      {/* ── Desktop: left dark panel ── */}
      <div
        className="hidden md:block absolute left-0 top-0 overflow-hidden"
        style={{ width: "535px", height: "100%", background: "#0B1727", boxShadow: "6px 0px 5px #0B1C33" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col"
          style={{ left: "122px", top: "169px", width: "308px" }}
        >
          <h2 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Company Snapshot
          </h2>
          <p className="m-0 text-[13px] leading-[15px] tracking-[0.5px] mt-[15px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <div className="flex flex-col mt-[32px] gap-[8px]">
            <div className="flex items-center gap-[10px]">
              {STEPS.map((step) => (
                <div key={step.num} className="relative" style={{ width: "31px", height: "31px" }}>
                  <img src={step.img} alt="" className="absolute inset-0 w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-[12px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: step.done || step.active ? "#0B1727" : "#F3F0E9" }}>
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-[13px] leading-[24px] tracking-[0.5px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
              Step 2/4
            </span>
          </div>
        </motion.div>

        <div className="absolute" style={{ left: "-12px", top: "623px", width: "557px", height: "91px" }}>
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>

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

      {/* ── Desktop: right form panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute"
        style={{ left: "789px", top: "41px", width: "466px" }}
      >
        <div className="flex flex-col gap-[5px] mb-[32px]">
          <h1 className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            Tell us about your company
          </h1>
          <p className="m-0 text-[20px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>
            {"We'll use this to find your perfect matches."}
          </p>
        </div>

        <form onSubmit={handleProceed} className="flex flex-col gap-[23px]">
          <FloatingInput label="Company Name" value={companyName} onChange={setCompanyName} />
          <FloatingInput label="What does your company do" value={companyDesc} onChange={setCompanyDesc} />
          <FloatingInput label="Select interested industry" value={industry} onChange={setIndustry}
            rightIcon={<img src={imgDropdown} alt="" style={{ width: "18px", height: "18px", transform: "scaleY(-1)" }} />}
          />
          <div className="flex flex-col gap-[8px]">
            <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>
              select from 5 broad categories
            </span>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[8px]">
              {CHIPS.map((chip) => {
                const isActive = selected.includes(chip.label);
                return (
                  <button key={chip.label} type="button" onClick={() => toggleChip(chip.label)}
                    className="flex items-center gap-[14px] overflow-hidden"
                    style={{ width: `${chip.width}px`, height: "46px", background: "#FFFFFF", borderRadius: "20px", border: "none", cursor: "pointer", boxShadow: "0px 3px 2px rgba(33,33,33,0.2)", padding: "7px 16px" }}>
                    <img src={isActive ? imgChipActive : imgChipDefault} alt="" style={{ width: "32px", height: "32px", flexShrink: 0 }} />
                    <span className="text-[16px] leading-[32px] whitespace-nowrap"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: isActive ? 1 : 0.5 }}>
                      {chip.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center overflow-hidden mt-[8px]"
            style={{ height: "77px", background: "#2ABFBB", borderRadius: "20px", border: "none", cursor: "pointer" }}>
            <span className="text-[20px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>
              Proceed
            </span>
          </button>
        </form>
      </motion.div>

      {/* ── Mobile: top dark header ── */}
      <div
        className="md:hidden relative overflow-hidden flex flex-col justify-end px-6 pb-6"
        style={{ background: "#0B1727", minHeight: "200px" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[60px] pointer-events-none opacity-60">
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 pt-12"
        >
          <h2 className="m-0 text-[28px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Company Snapshot
          </h2>
          <p className="m-0 text-[13px] leading-[18px] tracking-[0.3px] mt-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center gap-[10px] mt-4">
            {STEPS.map((step) => (
              <div key={step.num} className="relative" style={{ width: "28px", height: "28px" }}>
                <img src={step.img} alt="" className="absolute inset-0 w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center text-[11px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: step.done || step.active ? "#0B1727" : "#F3F0E9" }}>
                  {step.num}
                </span>
              </div>
            ))}
            <span className="text-[12px] ml-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
              Step 2/4
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile: form ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden flex flex-col px-6 py-8 gap-5"
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-[26px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            Tell us about your company
          </h1>
          <p className="m-0 text-[14px] leading-[20px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: 0.7 }}>
            {"We'll use this to find your perfect matches."}
          </p>
        </div>

        <form onSubmit={handleProceed} className="flex flex-col gap-4">
          {[
            { label: "Company Name", value: companyName, onChange: setCompanyName },
            { label: "What does your company do", value: companyDesc, onChange: setCompanyDesc },
            { label: "Select interested industry", value: industry, onChange: setIndustry },
          ].map(({ label, value, onChange }) => (
            <div key={label} className="relative" style={{ height: "84px" }}>
              <div className="absolute z-10 bg-white px-4 py-2" style={{ left: "24px", top: 0, borderRadius: "4px" }}>
                <span className="text-[14px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#0B1727" }}>{label}</span>
              </div>
              <input value={value} onChange={(e) => onChange(e.target.value)}
                className="absolute bottom-0 w-full outline-none bg-white"
                style={{ height: "64px", border: "2px solid #0B1727", borderRadius: "16px", paddingLeft: "24px", paddingRight: "16px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "15px", color: "#0B1727" }}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>
              select from 5 broad categories
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {CHIPS.map((chip) => {
                const isActive = selected.includes(chip.label);
                return (
                  <button key={chip.label} type="button" onClick={() => toggleChip(chip.label)}
                    className="flex items-center gap-3 overflow-hidden"
                    style={{ height: "42px", background: "#FFFFFF", borderRadius: "20px", border: "none", cursor: "pointer", boxShadow: "0px 3px 2px rgba(33,33,33,0.2)", padding: "6px 14px" }}>
                    <img src={isActive ? imgChipActive : imgChipDefault} alt="" style={{ width: "28px", height: "28px", flexShrink: 0 }} />
                    <span className="text-[14px] whitespace-nowrap"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: isActive ? 1 : 0.5 }}>
                      {chip.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button type="submit" className="w-full flex items-center justify-center mt-2"
            style={{ height: "58px", background: "#2ABFBB", borderRadius: "16px", border: "none", cursor: "pointer" }}>
            <span className="text-[17px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>Proceed</span>
          </button>
        </form>

        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0B1727" }}>
          <span style={{ fontWeight: 300 }}>{"Already have an account? "}</span>
          <a href="/login" style={{ fontWeight: 600, fontStyle: "italic", color: "#0B1727" }}>Sign In</a>
        </p>
        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727", fontStyle: "italic" }}>
          Need Help?
        </p>
      </motion.div>
    </div>
  );
}
