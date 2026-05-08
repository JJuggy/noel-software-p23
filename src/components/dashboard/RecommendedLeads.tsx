"use client";

import { motion } from "framer-motion";

const imgStar =
  "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";
const imgPersonAvatar =
  "/assets/b6559fb7992aee0d43ef8dec19e5a55603779ea1.svg";
const imgCompanyAvatar =
  "/assets/b52a62677946377db87568cd84b96ad9614adf5c.svg";

const LEADS = [
  {
    name: "Thabo Ladi",
    email: "Username@gmail.com",
    role: "COO EasyAccount",
    rating: "4.6",
    avatar: imgPersonAvatar,
  },
  {
    name: "P23 Africa",
    email: "P23africa.com",
    role: "Business & Tech",
    rating: "4.6",
    avatar: imgCompanyAvatar,
  },
  {
    name: "Thabo Ladi",
    email: "Username@gmail.com",
    role: "COO EasyAccount",
    rating: "4.6",
    avatar: imgPersonAvatar,
  },
  {
    name: "P23 Africa",
    email: "P23africa.com",
    role: "Business & Tech",
    rating: "4.6",
    avatar: imgCompanyAvatar,
  },
];

export default function RecommendedLeads() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="bg-white rounded-[20px] shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)] overflow-hidden w-full flex flex-col"
      style={{ height: "250px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[60px] pt-[14px] pb-[12px]">
        <p
          className="text-[#0b1727] text-[16px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
        >
          Recommended Leads
        </p>
        <span
          className="text-[#27e6a7] text-[11px] italic px-[12px] py-[4px] border border-[#27e6a7] rounded-full"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          Verified
        </span>
      </div>

      {/* Leads list — fills remaining height, scrollable */}
      <div className="flex flex-col overflow-y-auto px-[40px] flex-1">
        {LEADS.map((lead, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.07, duration: 0.35 }}
            className="flex items-center gap-[16px] px-[18px] py-[12px] hover:bg-[#f9f9f9] transition-colors cursor-pointer"
          >
            {/* Avatar illustration */}
            <img
              src={lead.avatar}
              alt=""
              className="shrink-0"
              style={{ width: "72px", height: "72px" }}
            />

            {/* Name / email / role */}
            <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
              <p
                className="text-[#193e47] text-[16px] leading-[17px] m-0 truncate"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {lead.name}
              </p>
              <span
                className="text-[#0b1727] text-[11px] leading-[18px] truncate"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {lead.email}
              </span>
              <span
                className="text-[#0b1727] text-[8px] leading-[14px] truncate"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {lead.role}
              </span>
            </div>

            {/* Rating + star */}
            <div className="flex gap-[6px] items-center shrink-0">
              <span
                className="text-[#193e47] text-[16px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: "25px",
                }}
              >
                {lead.rating}
              </span>
              <img
                src={imgStar}
                alt="rating"
                style={{ width: "19px", height: "19px" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
