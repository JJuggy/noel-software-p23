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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url('${imgTexture}')`, backgroundSize: "1024px 1024px", opacity: 0.12 }} />

      {/* ── Desktop: teal accent bar ── */}
      <div className="hidden md:block absolute z-10"
        style={{ left: "540px", top: "-13px", width: "20px", height: "961px", background: "#2ABFBB", borderRadius: "0 10px 30px 0" }} />

      {/* ── Desktop: left dark panel ── */}
      <div className="hidden md:block absolute left-0 top-0 overflow-hidden"
        style={{ width: "535px", height: "100%", background: "#0B1727", boxShadow: "6px 0px 5px #0B1C33" }}>
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
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute"
        style={{ left: "786px", top: "71px", width: "536px" }}
      >
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
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>{"I'm great at;"}</span>
              <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>select max 3 tags</span>
            </div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[8px]">
              {GREAT_AT_TAGS.map((tag) => (
                <TagChip key={tag} label={tag} active={greatAt.includes(tag)} onToggle={() => toggle(greatAt, setGreatAt, tag)} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>{"I can help others with;"}</span>
              <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>select max 3 tags</span>
            </div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[8px]">
              {HELP_WITH_TAGS.map((tag) => (
                <TagChip key={tag} label={tag} active={helpWith.includes(tag)} onToggle={() => toggle(helpWith, setHelpWith, tag)} />
              ))}
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center mt-[8px]"
            style={{ height: "77px", background: "#2ABFBB", borderRadius: "20px", border: "none", cursor: "pointer" }}>
            <span className="text-[20px] leading-[24px] tracking-[0.5px]"
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
            <span style={{ fontWeight: 300 }}>Almost There! </span>Superpowers
          </h2>
          <p className="m-0 text-[13px] leading-[18px] tracking-[0.3px] mt-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center gap-[10px] mt-4">
            {STEPS.map((s) => (
              <div key={s.num} className="relative" style={{ width: "28px", height: "28px" }}>
                <img src={s.img} alt="" className="absolute inset-0 w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center text-[11px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: s.color }}>
                  {s.num}
                </span>
              </div>
            ))}
            <span className="text-[12px] ml-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
              Step 3/4
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
            {"What's your secret sauce?"}
          </h1>
          <p className="m-0 text-[14px] leading-[20px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: 0.7 }}>
            {"Members will search for these skills!"}
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); router.push("/signup/step4"); }} className="flex flex-col gap-5">
          {[
            { title: "I'm great at;", tags: greatAt, setTags: setGreatAt },
            { title: "I can help others with;", tags: helpWith, setTags: setHelpWith },
          ].map(({ title, tags, setTags }) => (
            <div key={title} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-[15px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727" }}>{title}</span>
                <span className="text-[12px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#8C9AA6" }}>select max 3 tags</span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {GREAT_AT_TAGS.map((tag) => (
                  <button key={tag} type="button" onClick={() => toggle(tags, setTags, tag)}
                    className="flex items-center gap-2 overflow-hidden"
                    style={{ height: "40px", background: "#FFFFFF", borderRadius: "20px", border: "none", cursor: "pointer", boxShadow: "0px 3px 2px rgba(33,33,33,0.2)", padding: "6px 12px" }}>
                    <img src={tags.includes(tag) ? imgChipActive : imgChipDefault} alt="" style={{ width: "24px", height: "24px", flexShrink: 0 }} />
                    <span className="text-[14px] whitespace-nowrap"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: tags.includes(tag) ? 1 : 0.5 }}>
                      {tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

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
