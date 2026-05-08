"use client";

import { motion } from "framer-motion";

const imgShareKnowledge = "/assets/abeeae0f73fafde75073da0949254cd06994ef1b.svg";
const imgUnlink01       = "/assets/1c7c1a3de596c092b4c34ce78ebbd776403cea5f.svg";
const imgEllipse249     = "/assets/450e06404c65c6843a29a626d613af6e2fe99cc1.png";
const imgEllipse250     = "/assets/beece3f316982ca84900c27d0997995fc3f1331a.png";
const imgEllipse251     = "/assets/08dd18b3201613fad3bfc3e2e2ce21e0ecf4e25d.png";

export default function MobileNetworkStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="mx-4"
    >
      <p
        className="text-[#0b1727] text-[10px] font-semibold mb-2 ml-[20px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        Network Stats
      </p>

      <div className="flex items-center justify-between px-[30px] py-[6px] bg-[#f9f9f9] border-[1.5px] border-[#0b1727] border-solid rounded-[50px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)]">
        {/* Leads */}
        <div className="flex gap-[15px] items-center">
          <img src={imgShareKnowledge} alt="" className="size-[30px] shrink-0" />
          <div className="flex flex-col items-start w-[56px]">
            <span
              className="text-[20px] font-bold leading-[40px] mb-[-12px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "linear-gradient(180deg, #ee8821, #f05831)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              45k
            </span>
            <span className="text-[#727677] text-[13px] leading-[20px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Leads
            </span>
          </div>
        </div>

        {/* Connections */}
        <div className="flex gap-[15px] items-center">
          <img src={imgUnlink01} alt="" className="size-[30px] shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[#0496ff] text-[20px] font-bold leading-[40px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              75k
            </span>
            <span className="text-[#727677] text-[13px] leading-[20px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Connections
            </span>
          </div>
        </div>

        {/* Avatars + Active Members */}
        <div className="flex flex-col items-center gap-2 w-[94px]">
          {/* Overlapping avatars */}
          <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] mb-[-7px]">
            <img src={imgEllipse249} alt="" className="col-1 row-1 ml-0 mt-0 size-[22px]" />
            <img src={imgEllipse250} alt="" className="col-1 row-1 ml-[19px] mt-0 h-[22px] w-[20px]" />
            <img src={imgEllipse251} alt="" className="col-1 row-1 ml-[36px] mt-0 size-[22px]" />
          </div>
          <p className="text-[#0b1727] text-[8px] leading-[25.556px] w-[56px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
            200k+ People
          </p>
          {/* Active Members pill */}
          <div
            className="flex flex-col items-center justify-center h-[27px] w-full rounded-[20px] px-[10px] py-[8px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)]"
            style={{ background: "#bb98fb" }}
          >
            <span className="text-[#262a27] text-[8px] font-bold whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Active Members
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
