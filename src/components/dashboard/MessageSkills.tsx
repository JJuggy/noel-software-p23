"use client";

import { motion } from "framer-motion";

const imgBarBg = "/assets/4144d333819180f4ed593df4e8081ebbf04c622e.svg";
const imgChart = "/assets/2d4a19692306da46c53fc5ad04b2d0db71665320.svg";

export default function MessageSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="bg-white rounded-[20px] overflow-hidden relative w-full"
      style={{
        height: "353px",
        boxShadow: "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
      }}
    >
      {/* Title */}
      <p
        className="absolute text-[#414d55] text-[16px] tracking-[0.01px] leading-[20px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, top: "20px", left: "69px" }}
      >
        Message Stats
      </p>

      {/* Bar graph background — centred, y=90, 294×218px */}
      <div className="absolute" style={{ width: "294px", height: "218px", top: "90px", left: "50%", transform: "translateX(-50%)" }}>
        <img src={imgBarBg} alt="" className="absolute inset-0 w-full h-full" />
      </div>

      {/* Pie chart — centred vertically at 50%+3.5px, inset 15.5% sides */}
      <div
        className="absolute"
        style={{
          top: "15.58%",
          left: "15.5%",
          right: "15.5%",
          bottom: "3.68%",
        }}
      >
        <img src={imgChart} alt="Message Stats Chart" className="w-full h-full object-contain" />
      </div>

      {/* 37% Read label — top-right of chart */}
      <div
        className="absolute text-center"
        style={{ left: "66.34%", top: "calc(50% - 59.5px)", transform: "translateY(-50%)" }}
      >
        <p
          className="text-[#0b1727] text-[10px] tracking-[0.42px] uppercase leading-[20px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          37%
        </p>
        <p
          className="text-[#0b1727] text-[10px] leading-[20px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
        >
          Read
        </p>
      </div>

      {/* 63% Unread label — bottom-left of chart */}
      <div
        className="absolute text-center"
        style={{ left: "36.08%", top: "calc(50% + 68px)" }}
      >
        <p
          className="text-white text-[10px] tracking-[0.42px] uppercase leading-[20px] font-bold"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
        >
          63%
        </p>
        <p
          className="text-white text-[10px] leading-[20px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
        >
          Unread
        </p>
      </div>
    </motion.div>
  );
}
