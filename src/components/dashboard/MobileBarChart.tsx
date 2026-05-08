"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ── Figma assets (node 8787:3252) ──────────────────────────────────────────
const imgVector7  = "/assets/c46b365fcea6e3262cb5869d3dc79b2fddc86f10.svg";
const imgBar1     = "/assets/e8e0ad2996dd74c71af14e633b69a06c2ca6763b.svg";
const imgBar2     = "/assets/a3cc3c6fbe573c760645397b7c6c7bbc4b7c8075.svg";
const imgBar3     = "/assets/586f82ab07a9237b804d906eb0c6824744771302.svg";
const imgBar4     = "/assets/07f3a184bb159a43e82d24ac9e48e99856d882dd.svg";
const imgBar5     = "/assets/03f9daacfc3c2519f083d812a7d7bec6fe287329.svg";
const imgBar6     = "/assets/a67b5e403325ca29cebefcb0a9e8f52d3a662874.svg";
const imgBar7     = "/assets/0eea9d9ce7eb42937fd9b614a3c5a52460bb39f8.svg";
const imgLine45   = "/assets/d0efe3e91ad97adf960cc5577bbbe5f022cf44cd.svg";
const imgLine46   = "/assets/66f27efc848e64b6c744dd71dde3aa8745f9664a.svg";
const imgPolygon4 = "/assets/ef01e59b9d2b2bcb70f3dd309d9b5ea2f64c0ef8.svg";

// ── Tabs ────────────────────────────────────────────────────────────────────
const TABS = ["Directory", "Smart matches", "Active Leads"];

export default function MobileBarChart() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.4 }}
      className="mx-4"
    >
      {/* ── Chart (399×241px, pixel-perfect from Figma node 8787:3252) ── */}
      <div className="relative w-full" style={{ height: "241px" }}>

        {/* Teal background wave — flipped vertically & rotated 180° */}
        <div className="-translate-x-1/2 absolute flex items-center justify-center left-1/2 top-0"
          style={{ width: "min(399px, 100vw)", height: "241px" }}>
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative" style={{ width: "min(399px, 100vw)", height: "241px" }}>
              <div className="absolute inset-[-1.45%_-1.13%_-2.28%_-1.13%]">
                <img alt="" className="block max-w-none size-full" src={imgVector7} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bars container: 253×128px, centred at left=50%+29px, top=74px ── */}
        <div className="-translate-x-1/2 absolute" style={{ left: "calc(50% + 29px)", top: "74px", width: "253px", height: "128px" }}>

          {/* Bar 1 — Mon, 56%, left=-26px, top=28px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "97px", left: "calc(50% - 144.01px)", top: "28px", width: "1.024px" }}>
              <div className="absolute" style={{ inset: "-16.49% -1562.4% -16.73% -1584.32%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar1} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "-26px", top: "50px", width: "17px", height: "9px" }}>
              56%
            </p>
          </div>

          {/* Bar 2 — Tue, 89%, left=18px, top=3.5px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "121.5px", left: "calc(50% - 100.73px)", top: "3.5px", width: "1.376px" }}>
              <div className="absolute" style={{ inset: "-13.17% -1163.12% -13.38% -1178.92%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar2} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "18px", top: "20px", width: "18px", height: "15px" }}>
              89%
            </p>
          </div>

          {/* Bar 3 — Wed, 44%, left=63px, top=55px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "70px", left: "calc(50% - 54.58px)", top: "55px", width: "0.156px" }}>
              <div className="absolute" style={{ inset: "-22.86% -10238.75% -22.86% -10240%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar3} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "63px", top: "76px", width: "19px", height: "15px" }}>
              44%
            </p>
          </div>

          {/* Bar 4 — Thur, 67%, left=109px, top=20px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "105px", left: "calc(50% - 9.32px)", top: "20px", width: "1.649px" }}>
              <div className="absolute" style={{ inset: "-15.24% -970.12% -15.54% -986.11%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar4} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "109px", top: "36px", width: "19px", height: "15px" }}>
              67%
            </p>
          </div>

          {/* Bar 5 — Fri, 59%, left=155px, top=26px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "99px", left: "calc(50% + 36.24px)", top: "26px", width: "1.376px" }}>
              <div className="absolute" style={{ inset: "-16.16% -1163.04% -16.51% -1183.98%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar5} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "155px", top: "44px", width: "18px", height: "15px" }}>
              59%
            </p>
          </div>

          {/* Bar 6 — Sat, 87%, left=200px, top=8px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "117px", left: "calc(50% + 82.12px)", top: "8px", width: "1.376px" }}>
              <div className="absolute" style={{ inset: "-13.68% -1163.09% -13.91% -1179.93%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar6} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[8px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "200px", top: "27px", width: "19px", height: "15px" }}>
              87%
            </p>
          </div>

          {/* Bar 7 — Sun, 100%, left=246px, top=-3px */}
          <div className="absolute contents">
            <div className="-translate-x-1/2 absolute" style={{ height: "121.5px", left: "calc(50% + 126.25px)", top: "3.5px", width: "1.376px" }}>
              <div className="absolute" style={{ inset: "-13.17% -1163.13% -13.34% -1175.98%" }}>
                <img alt="" className="block max-w-none size-full" src={imgBar7} />
              </div>
            </div>
            <p className="absolute font-bold text-[#f3f0e9] text-[6px] leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", left: "246px", top: "-3px", width: "17px", height: "11px" }}>
              100%
            </p>
          </div>
        </div>

        {/* ── X-axis baseline ── */}
        <div className="absolute h-0" style={{ left: "46px", top: "215.99px", width: "325.006px" }}>
          <div className="absolute" style={{ inset: "-2px 0 0 0" }}>
            <img alt="" className="block max-w-none size-full" src={imgLine45} />
          </div>
        </div>

        {/* ── X-axis labels ── */}
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "75px",  top: "220px" }}>Mon</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "118px", top: "220px" }}>Tue</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "164px", top: "220px" }}>Wed</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "209px", top: "220px" }}>Thur</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "259px", top: "220px" }}>Fri</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "303px", top: "220px" }}>Sat</p>
        <p className="absolute text-[8px] text-black leading-normal whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", left: "346px", top: "220px" }}>Sun</p>

        {/* ── Horizontal grid lines (dashed) ── */}
        {/* top=61 (100%) */}
        <div className="absolute flex h-px items-center justify-center" style={{ left: "37px", top: "61px", width: "345px" }}>
          <div className="flex-none rotate-[-0.17deg]">
            <div className="h-0 relative" style={{ width: "345.001px" }}>
              <div className="absolute" style={{ inset: "-0.5px 0 0 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine46} />
              </div>
            </div>
          </div>
        </div>
        {/* top=100 (75%) */}
        <div className="absolute flex h-px items-center justify-center" style={{ left: "37px", top: "100px", width: "345px" }}>
          <div className="flex-none rotate-[-0.17deg]">
            <div className="h-0 relative" style={{ width: "345.001px" }}>
              <div className="absolute" style={{ inset: "-0.5px 0 0 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine46} />
              </div>
            </div>
          </div>
        </div>
        {/* top=140 (50%) */}
        <div className="absolute flex h-px items-center justify-center" style={{ left: "37px", top: "140px", width: "345px" }}>
          <div className="flex-none rotate-[-0.17deg]">
            <div className="h-0 relative" style={{ width: "345.001px" }}>
              <div className="absolute" style={{ inset: "-0.5px 0 0 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine46} />
              </div>
            </div>
          </div>
        </div>
        {/* top=178 (25%) */}
        <div className="absolute flex h-px items-center justify-center" style={{ left: "37px", top: "178px", width: "345px" }}>
          <div className="flex-none rotate-[-0.17deg]">
            <div className="h-0 relative" style={{ width: "345.001px" }}>
              <div className="absolute" style={{ inset: "-0.5px 0 0 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine46} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Y-axis labels ── */}
        <p className="absolute font-bold text-[#262a27] text-[8px] leading-normal" style={{ fontFamily: "'Montserrat', sans-serif", left: "14px", top: "57px",  width: "22px", height: "9px" }}>100%</p>
        <p className="absolute font-bold text-[#262a27] text-[8px] leading-normal" style={{ fontFamily: "'Montserrat', sans-serif", left: "14px", top: "96px",  width: "22px", height: "9px" }}>75%</p>
        <p className="absolute font-bold text-[#262a27] text-[8px] leading-normal" style={{ fontFamily: "'Montserrat', sans-serif", left: "14px", top: "136px", width: "22px", height: "9px" }}>50%</p>
        <p className="absolute font-bold text-[#262a27] text-[8px] leading-normal" style={{ fontFamily: "'Montserrat', sans-serif", left: "14px", top: "173px", width: "17px", height: "9px" }}>25%</p>

        {/* ── "7 days" pill ── */}
        <div className="absolute bg-white flex items-center justify-center px-[10px] py-[3px] rounded-[10px]"
          style={{ left: "103px", top: "10px" }}>
          <p className="font-bold text-[10px] text-black whitespace-nowrap leading-normal"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            7 days
          </p>
        </div>

        {/* ── "More" button ── */}
        <div className="absolute" style={{ left: 0, top: "5px" }}>
          <div className="absolute bg-[#bb98fb] rounded-[20px] shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)]"
            style={{ left: 0, top: 0, width: "80px", height: "27px" }} />
          <div className="absolute flex gap-[13px] items-center" style={{ left: "16px", top: "8px" }}>
            <p className="font-bold text-[#262a27] text-[10px] whitespace-nowrap leading-normal"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              More
            </p>
            <div className="flex items-center justify-center">
              <div className="-scale-y-100 flex-none">
                <div className="relative" style={{ width: "8px", height: "8px" }}>
                  <div className="absolute" style={{ bottom: "25%", left: "9.44%", right: "9.44%", top: "3.75%" }}>
                    <img alt="" className="block max-w-none size-full" src={imgPolygon4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* ── end chart ── */}

      {/* ── Tab switcher ── */}
      <div className="relative flex items-center mt-4 rounded-[20px]"
        style={{ background: "#f1eeee", border: "0.5px solid #f9f9f9", height: "37px" }}>
        {/* Sliding active pill */}
        <div
          className="absolute rounded-[20px] transition-all duration-300"
          style={{
            background: "#a87ef7",
            border: "0.5px solid #f9f9f9",
            height: "33px",
            width: "33.333%",
            left: `${activeTab * 33.333}%`,
            top: "2px",
          }}
        />
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className="relative z-10 flex-1 text-[12px] text-center leading-normal transition-colors"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? "#0b1727" : "#000",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
