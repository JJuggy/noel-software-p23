"use client";

import { motion } from "framer-motion";

const imgAttachmentCircle = "/assets/591322ba2710c6fc0e645c9ff0ef6768d3447798.svg";
const imgStar             = "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";

const MATCHES = [
  {
    name: "Chidi Nwonsu",
    role: "COO Easyaccount",
    photo: "/assets/3466501674ba2031c153e407416b1140814e91a7.png",
    photoTop: "-8.13%",
    rating: "4.6",
  },
  {
    name: "Stephan Odili",
    role: "CTO Afrilaw",
    photo: "/assets/ea59ff2b833358666c9e02e096ecb3011975361d.png",
    photoTop: "-4.68%",
    rating: "4.6",
  },
  {
    name: "Stephan Odili",
    role: "CTO Afrilaw",
    photo: "/assets/ea59ff2b833358666c9e02e096ecb3011975361d.png",
    photoTop: "-4.68%",
    rating: "4.6",
  },
];

export default function Matches() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="bg-white border-[1.8px] border-[#49b7a0] border-solid rounded-[20px] overflow-hidden relative w-[388px] shrink-0"
      style={{ height: "250px" }}
    >
      {/* Title — absolute top-left */}
      <div className="absolute left-[18px] top-[13px] flex flex-col italic text-[#0b1727]">
        <span
          className="text-[16px] leading-[24px] tracking-[3px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          Your Smart
        </span>
        <span
          className="text-[27px] leading-[24px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          Matches
        </span>
      </div>

      {/* Horizontally scrollable cards row */}
      <div
        className="absolute flex gap-[12px] items-center overflow-x-auto overflow-y-hidden"
        style={{ left: "-1.3px", top: "63px", width: "calc(100% + 2.6px)", paddingBottom: "4px" }}
      >
        {MATCHES.map((match, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[10px] overflow-hidden shrink-0 cursor-pointer"
            style={{
              width: "167px",
              height: "174px",
              boxShadow: "0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)",
            }}
          >
            {/* Full-bleed photo */}
            <div className="absolute inset-0 overflow-hidden rounded-[10px] pointer-events-none">
              <img
                src={match.photo}
                alt=""
                className="absolute left-0 max-w-none w-full"
                style={{ height: "143.84%", top: match.photoTop }}
              />
            </div>

            {/* Frosted info overlay — starts at y=94, height=77px */}
            <div
              className="absolute left-[2px] rounded-bl-[10px] rounded-br-[10px]"
              style={{
                top: "94px",
                width: "163px",
                height: "77px",
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
              }}
            />

            {/* Name */}
            <div
              className="absolute left-[9px] text-[#193e47] text-[10px]"
              style={{
                top: "114.5px",
                transform: "translateY(-50%)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                width: "158px",
                lineHeight: "25px",
              }}
            >
              {match.name}
            </div>

            {/* Role */}
            <div
              className="absolute left-[9px] text-[#193e47] text-[5px]"
              style={{
                top: "123px",
                transform: "translateY(-50%)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                width: "50px",
                lineHeight: "25px",
              }}
            >
              {match.role}
            </div>

            {/* Attachment circle icon */}
            <img
              src={imgAttachmentCircle}
              alt=""
              className="absolute"
              style={{ left: "120px", top: "123px", width: "31px", height: "31px" }}
            />

            {/* Rating + star */}
            <div className="absolute flex gap-[6px] items-center" style={{ left: "9px", top: "137px" }}>
              <span
                className="text-[#193e47] text-[16px] w-[26px]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, lineHeight: "25px" }}
              >
                {match.rating}
              </span>
              <img src={imgStar} alt="rating" style={{ width: "19px", height: "19px" }} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
