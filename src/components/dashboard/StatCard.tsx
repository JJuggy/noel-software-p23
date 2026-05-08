"use client";

import { motion } from "framer-motion";

// ── Card 1: Growth graph (purple gradient) ──────────────────────────────────
const imgVector3   = "/assets/fa14840b1572df9863cbca5f8ae83295597b0de4.svg";
const imgVector4   = "/assets/0a4afaf4e42216897dc34c6c1383daf091bfe2d4.svg";
const imgVector5   = "/assets/c312ff5f41a619f6d8e69133ea0a76d351dc5f65.svg";
const imgVector6   = "/assets/5b11b63165f2c777161a392447117c9924a6af95.svg";
const imgIndicator = "/assets/ba45a3bb8727c8a123fbe1893f64c52e8f01d904.svg";

export function StatCardGrowth({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative h-[124px] rounded-[20px] overflow-hidden shrink-0 shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)]"
      style={{ backgroundImage: "linear-gradient(73.4deg, rgb(164,122,240) 10%, rgb(204,166,255) 89%)" }}
    >
      {/* Graph — absolute right side, overflowing top */}
      <div className="absolute" style={{ left: "50px", top: "19px", width: "301px", height: "166px" }}>
        {/* Mask group layer 1 */}
        <div className="absolute" style={{ left: "4.78px", top: 0, width: "324.811px", height: "123px",
          maskImage: `url('${imgVector3}')`, maskSize: "440.75px 370px", maskPosition: "-62.18px -123.5px",
          maskRepeat: "no-repeat", WebkitMaskImage: `url('${imgVector3}')`,
          WebkitMaskSize: "440.75px 370px", WebkitMaskPosition: "-62.18px -123.5px", WebkitMaskRepeat: "no-repeat" }}>
          <img src={imgVector4} alt="" className="absolute inset-0 w-full h-full" />
        </div>
        {/* Mask group layer 2 */}
        <div className="absolute" style={{ left: "3.19px", top: 0, width: "324.811px", height: "123px",
          maskImage: `url('${imgVector3}')`, maskSize: "440.75px 370px", maskPosition: "-60.586px -123.5px",
          maskRepeat: "no-repeat", WebkitMaskImage: `url('${imgVector3}')`,
          WebkitMaskSize: "440.75px 370px", WebkitMaskPosition: "-60.586px -123.5px", WebkitMaskRepeat: "no-repeat" }}>
          <img src={imgVector5} alt="" className="absolute inset-0 w-full h-full" />
        </div>
        {/* Line */}
        <div className="absolute" style={{ left: "3.19px", top: 0, width: "324.811px", height: "99.878px" }}>
          <img src={imgVector6} alt="" className="absolute inset-[-1%_-0.31%] max-w-none w-[102%] h-[102%]" />
        </div>
        {/* Indicator dot */}
        <div className="absolute" style={{ left: "232.6px", top: "27px", width: "10.74px", height: "60px" }}>
          <img src={imgIndicator} alt="" className="absolute inset-[-3.33%_-18.62%_0_-18.62%] max-w-none" style={{ width: "137.62%", height: "103.33%" }} />
        </div>
      </div>

      {/* Info pill */}
      <div
        className="absolute flex flex-col items-start"
        style={{ left: "39px", top: "5px", padding: "10.222px 15.333px 15.333px 16.611px",
          borderRadius: "10.222px", filter: "drop-shadow(0px 2.556px 2.556px rgba(0,0,0,0.04))" }}
      >
        <span className="text-[rgba(88,233,184,0.9)] text-[8px] leading-[17.889px] tracking-[-0.24px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
          Weekly
        </span>
        <div className="flex gap-[7.667px] items-start">
          <span className="text-[#f3f0e9] text-[10px] leading-[25.556px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Growth
          </span>
          <span className="text-[#0b1727] text-[19.59px] leading-[26.123px] font-medium tracking-[0.42px] text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            +3.4%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Card 2: Network Status (white card) ────────────────────────────────────
const imgArrowUp      = "/assets/f31029cb0b7e97d579a7b4a8ac2a7f8255e81d22.svg";
const imgDivider      = "/assets/cdea4f7f394c43fc48c00bcdac2ae769020a3d98.svg";
const imgFileDownload = "/assets/432f52be83334acebe4d56a3e98aa3555d49b404.svg";

export function StatCardNetwork({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative h-[124px] rounded-[20px] overflow-hidden shrink-0 bg-white shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)]"
    >
      {/* Title */}
      <p className="absolute text-[#131313] text-[16px] leading-[20px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, left: "21px", top: "calc(50% - 42px)" }}>
        Network Status
      </p>

      {/* Values row */}
      <div className="absolute flex gap-[15px] items-start" style={{ left: "21px", top: "51px" }}>
        {/* Leads */}
        <div className="flex flex-col w-[56px]">
          <span className="text-[28px] font-bold leading-[40px] mb-[-4px]"
            style={{ fontFamily: "'Montserrat', sans-serif",
              background: "linear-gradient(180deg, #ee8821, #f05831)", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            45k
          </span>
          <span className="text-[#727677] text-[16px] leading-[20px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
            Leads
          </span>
        </div>
        {/* Divider */}
        <div className="relative shrink-0" style={{ width: "2px", height: "57px" }}>
          <img src={imgDivider} alt="" className="absolute inset-0 w-full h-full" />
        </div>
        {/* Connections */}
        <div className="flex flex-col">
          <span className="text-[#0496ff] text-[28px] font-bold leading-[40px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            75k
          </span>
          <span className="text-[#727677] text-[16px] leading-[20px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
            Connections
          </span>
        </div>
      </div>

      {/* Top-right: 15% increase */}
      <div className="absolute flex flex-col items-end" style={{ left: "236px", top: "20px", width: "106px" }}>
        <div className="flex items-center gap-[2px]">
          <span className="text-[#131313] text-[20px] font-medium leading-normal"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            15%
          </span>
          <div className="relative overflow-hidden" style={{ width: "24px", height: "24px" }}>
            <div className="absolute" style={{ inset: "29.17%" }}>
              <img src={imgArrowUp} alt="" className="absolute inset-[-10%] max-w-none" style={{ width: "120%", height: "120%" }} />
            </div>
          </div>
        </div>
        <span className="text-[#454545] text-[10px] tracking-[-0.3px] leading-normal w-[93px] text-right"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
          Increase this week
        </span>
      </div>

      {/* Blue download button */}
      <div className="absolute bg-[#4c6fff] rounded-[5px] overflow-hidden"
        style={{ right: "20px", top: "72px", width: "36px", height: "36px" }}>
        <img src={imgFileDownload} alt="" className="absolute" style={{ left: "6px", top: "6px", width: "24px", height: "24px" }} />
      </div>
    </motion.div>
  );
}

// ── Card 3: Community (dark green gradient) ────────────────────────────────
const imgAvatar1  = "/assets/ce9aa8e42269d3248629e8d108f8a195bcf536d2.png";
const imgAvatar2  = "/assets/f29ccd96a7a16f644c0c0386804e8e526d22002e.png";
const imgAvatar3  = "/assets/6d9d2080fda0a8d4cc53150b12e6717672e16b61.png";
const imgPlant    = "/assets/66d6a8121667d70180d5620f93feb07918f7d24f.png";

export function StatCardCommunity({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative h-[124px] rounded-[20px] overflow-hidden shrink-0 shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)]"
      style={{ backgroundImage: "linear-gradient(116.161deg, rgb(18,85,63) 12.945%, rgb(2,37,26) 92.78%)" }}
    >
      {/* Title */}
      <p className="absolute text-[#f3f0e9] text-[16px] leading-[18px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, left: "27px", top: "22px", width: "131px" }}>
        Let's Join Our Community
      </p>

      {/* Avatars + people count */}
      <div className="absolute flex gap-[5px] items-center" style={{ left: "27px", top: "88px" }}>
        {/* Overlapping avatars */}
        <div className="relative" style={{ width: "53px", height: "22px" }}>
          <img src={imgAvatar1} alt="" className="absolute" style={{ left: 0,  top: 0, width: "21px", height: "22px" }} />
          <img src={imgAvatar2} alt="" className="absolute" style={{ left: "16px", top: 0, width: "21px", height: "22px" }} />
          <img src={imgAvatar3} alt="" className="absolute" style={{ left: "32px", top: 0, width: "21px", height: "22px" }} />
        </div>
        <span className="text-[#f3f0e9] text-[6px] leading-[25.556px] w-[56px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
          200k+ People
        </span>
      </div>

      {/* Plant illustration — top-right */}
      <div className="absolute" style={{ left: "134px", top: "-44px", width: "229px", height: "183px" }}>
        <img src={imgPlant} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>
    </motion.div>
  );
}

// Default export kept for backwards compatibility
export default function StatCard() { return null; }
